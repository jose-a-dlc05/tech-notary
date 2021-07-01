import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

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
	state = {
		blogPosts: [],
	};

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

		if (posts.length === 0) {
			localStorage.setItem("posts", JSON.stringify(blogPosts));
			posts = blogPosts;
		}

		this.setState({ blogPosts: posts });
	}

	onSubmitHandleAdd = (post) => {
		const { title, description } = post;
		// console.log("adding post...");
		const newPost = {
			id: uuidv4(),
			title,
			description,
			date: "June 30, 2021",
		};
		const posts = [...this.state.blogPosts];
		posts.push(newPost);
		// Update localStorage
		localStorage.setItem("posts", JSON.stringify(posts));
		this.setState({ blogPosts: posts });
		// console.log("added post");
	};

	render() {
		console.log(this.state.blogPosts);
		return (
			<div>
				<Navbar />
				<Switch>
					<Route
						exact
						path='/'
						render={(props) => (
							<HomePage {...props} blogData={this.state.blogPosts} />
						)}
					/>
					<Route path='/login' component={SignInPage} />
					<Route path='/signup' component={SignUpPage} />
					<Route
						path='/postcreate'
						render={(props) => (
							<EditorPage {...props} submitPost={this.onSubmitHandleAdd} />
						)}
					/>
					<Route path='/blog' component={BlogPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
