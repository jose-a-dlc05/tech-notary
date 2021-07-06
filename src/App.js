import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.styles.scss";

import Navbar from "./components/nav-bar/Navbar.component";
import HomePage from "./pages/HomePage/HomePage.page";
import SignInPage from "./pages/SignInPage/SignInPage.page";
import SignUpPage from "./pages/SignUpPage/SignUpPage.page";
import EditorPage from "./pages/EditorPage/EditorPage.page";
import BlogPage from "./pages/BlogPage/BlogPage.page";
import blogPosts from "./data/posts";
import { v4 as uuidv4 } from "uuid";
import { auth, createUserProfileDocument } from "./firebase.util";
// import ProfilePage from "./pages/ProfilePage/ProfilePage.page";

import "semantic-ui-css/semantic.min.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogPosts: [],
			redirect: null,
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.getAllPosts();
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				/**
				 * onSnapShot method allows us to get the data related to the user
				 * DocumentSnapshot
				 * We get a documentSnapshot object from our documentReference object
				 *
				 * The documentSnapshot object allows us to check if a document exists at
				 * this query using the .exists property which returns a boolean.
				 *
				 * We can also get the actual properties on the object by calling the .data()
				 * method, which returns us a JSON object of the document.
				 */

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
		let posts = [];
		try {
			if (posts !== null && posts.length < 1) {
				posts = JSON.parse(localStorage.getItem("posts"));
			}
		} catch (error) {
			console.log("error getting post", error.message);
		}

		if (!posts) {
			localStorage.setItem("posts", JSON.stringify(blogPosts));
			posts = blogPosts;
		}

		this.setState({ blogPosts: posts });
	};

	onCreate = (post) => {
		// Destructure the object argument
		const { title, description, body } = post;

		// Declare and initialize dynamically created post
		const newPost = {
			id: uuidv4(),
			title,
			description,
			body,
			date: `${this.dateObject().toLocaleString("default", {
				month: "long",
			})} ${this.dateObject().getDate()}, ${this.dateObject().getFullYear()}`,
		};

		// Declare and initialize posts with copy of current blogPosts
		const posts = [...this.state.blogPosts];

		// Add new object to array
		posts.push(newPost);

		// Update localStorage
		localStorage.setItem("posts", JSON.stringify(posts));

		// Update state in App
		this.setState({ blogPosts: posts, redirect: "/" });
	};

	onDelete = (id) => {
		// Destructure the object argument
		const { blogPosts } = this.state;

		// Declare and initialize posts without the id argument
		const posts = blogPosts.filter((blogPost) => id !== blogPost.id);

		// Set posts in local storage
		localStorage.setItem("posts", JSON.stringify(posts));

		// Update blogPosts in component state with posts
		this.setState({ blogPosts: posts, redirect: "/" });
	};

	onUpdate = (post) => {
		const posts = JSON.parse(localStorage.getItem("posts"));
		const blogPosts = posts.map((currentPost) => {
			if (currentPost.id === post.id) {
				return post;
			}
			return currentPost;
		});

		localStorage.setItem("posts", JSON.stringify(blogPosts));
		this.setState({ blogPosts, redirect: "/" });
	};

	dateObject = () => {
		let d = new Date();
		return d;
	};

	render() {
		const { redirect, currentUser, blogPosts } = this.state;
		if (redirect) {
			return <Redirect to={"/"} />;
		}
		return (
			<div>
				<Navbar currentUser={currentUser} />
				<Switch>
					<Route
						exact
						path='/'
						render={(props) => <HomePage {...props} blogData={blogPosts} />}
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
								onEdit={this.onEdit}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
