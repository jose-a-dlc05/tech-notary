import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/nav-bar/Navbar.component";
import HomePage from "./pages/HomePage/HomePage.page";
import SignInPage from "./pages/SignInPage/SignInPage.page";
import SignUpPage from "./pages/SignUpPage/SignUpPage.page";
import EditorPage from "./pages/EditorPage/EditorPage.page";
import BlogPage from "./pages/BlogPage/BlogPage.page";
import { auth, createUserProfileDocument, firestore } from "./firebase.util";
// import ProfilePage from "./pages/ProfilePage/ProfilePage.page";
import "./App.styles.scss";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogPosts: [],
			redirect: false,
			currentUser: undefined,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.getAllPosts();
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	getAllPosts = () => {
		firestore
			.collection("posts")
			.get()
			.then((data) => {
				let posts = [];
				data.forEach((doc) => {
					posts.push({
						post: doc.id,
						title: doc.data().title,
						description: doc.data().description,
						body: doc.data().body,
						userId: doc.data().userId,
						createdAt: `${doc
							.data()
							.createdAt.toDate()
							.toLocaleString("default", {
								month: "long",
							})} ${doc.data().createdAt.toDate().getDate()}, ${doc
							.data()
							.createdAt.toDate()
							.getFullYear()}`,
					});
				});
				this.setState({ blogPosts: posts });
			});
	};

	onCreate = (post) => {
		// Destructure the object argument
		const { title, description, body } = post;

		// Declare and initialize dynamically created post
		const newPost = {
			title,
			description,
			body,
			createdAt: new Date(),
			userId: this.state.currentUser.id,
		};

		// Declare and initialize posts with copy of current blogPosts
		const posts = [...this.state.blogPosts];

		// Add new object to array
		posts.push(newPost);

		// Update state in App
		// this.setState({ blogPosts: posts });

		// Update firebase
		return firestore.collection("posts").add(newPost);
		// console.log(newPost);
	};

	onDelete = (id) => {
		// Destructure the object argument
		const { blogPosts } = this.state;

		// Declare and initialize posts without the id argument
		const posts = blogPosts.filter((blogPost) => id !== blogPost.id);

		firestore
			.collection("posts")
			.doc(id)
			.delete()
			.then(() => {
				console.log("Document successfully deleted!");
			})
			.catch((error) => {
				console.error("Error removing document: ", error);
			});

		// Update blogPosts in component state with posts
		this.setState({ blogPosts: posts });
	};

	onUpdate = (post) => {
		const { id, title, description, body } = post;
		return firestore
			.collection("posts")
			.doc(id)
			.update({ title, description, body });

		// this.setState({ redirect: true });
	};

	render() {
		const { currentUser, blogPosts } = this.state;
		return (
			<div>
				<Navbar currentUser={currentUser} />
				<Switch>
					<Route
						exact
						path='/posts/user/:userId'
						render={(props) => (
							<HomePage
								{...props}
								blogData={blogPosts}
								getPosts={this.getAllPosts}
							/>
						)}
					/>
					<Route
						exact
						path='/'
						render={(props) => (
							<HomePage
								{...props}
								blogData={blogPosts}
								getPosts={this.getAllPosts}
							/>
						)}
					/>
					<Route path='/login' component={SignInPage} />
					<Route path='/signup' component={SignUpPage} />
					<Route
						path='/createpost/:id'
						render={(props) => (
							<EditorPage
								{...props}
								onCreate={this.onCreate}
								onUpdate={this.onUpdate}
							/>
						)}
					/>
					<Route
						path='/createpost'
						render={(props) => (
							<EditorPage {...props} onCreate={this.onCreate} />
						)}
					/>
					<Route
						path='/post/:param'
						render={(props) => (
							<BlogPage
								{...props}
								onDelete={this.onDelete}
								currentUser={currentUser}
							/>
						)}
					/>
					<Route path='/post' render={(props) => <BlogPage {...props} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
