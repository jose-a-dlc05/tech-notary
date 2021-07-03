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
// import ProfilePage from "./pages/ProfilePage/ProfilePage.page";

import "semantic-ui-css/semantic.min.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogPosts: [],
			redirect: null,
		};
	}

	componentDidMount() {
		// console.log("componentDidMount called");
		let posts = [];
		try {
			if (posts !== null && posts.length < 1) {
				posts = JSON.parse(localStorage.getItem("posts"));
			}
		} catch (e) {
			throw new Error("Empty Array");
		}

		if (!posts) {
			localStorage.setItem("posts", JSON.stringify(blogPosts));
			posts = blogPosts;
		}

		this.setState({ blogPosts: posts });
	}

	dateObject = () => {
		let d = new Date();
		return d;
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
		this.setState({ blogPosts: posts, redirect: "/home" });
	};

	onDelete = (id) => {
		// Destructure the object argument
		const { blogPosts } = this.state;
		// Declare and initialize posts without the id argument
		const posts = blogPosts.filter((blogPost) => id !== blogPost.id);
		// Set posts in local storage
		localStorage.setItem("posts", JSON.stringify(posts));
		// Update blogPosts in component state with posts
		this.setState({ blogPosts: posts, redirect: "/home" });
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}
		return (
			<div>
				<Navbar />
				<Switch>
					<Route
						exact
						path='/home'
						render={(props) => (
							<HomePage {...props} blogData={this.state.blogPosts} />
						)}
					/>
					<Route path='/login' component={SignInPage} />
					<Route path='/signup' component={SignUpPage} />
					<Route
						path='/createpost'
						render={(props) => (
							<EditorPage {...props} onCreate={this.onCreate} />
						)}
					/>
					<Route
						path='/post/:param'
						render={(props) => <BlogPage {...props} onDelete={this.onDelete} />}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
