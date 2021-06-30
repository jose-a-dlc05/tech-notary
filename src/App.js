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
		localStorage.setItem("posts", JSON.stringify(blogPosts));
		const posts = JSON.parse(localStorage.getItem("posts"));
		this.setState({ blogPosts: posts });
	}

	onSubmitHandleAdd = (event) => {
		event.preventDefault();

		// console.log("adding post...");
		const newPost = {
			title: "Understanding React",
			technology: "React",
			description: `Rorschach would say you have a hard time relating to others. Cops, another community I'm not part of. Rorschach would say you have a hard time relating to others. I'm going to tell you something that I've never told anyone before.`,
			id: uuidv4(),
		};
		const posts = JSON.parse(localStorage.getItem("posts"));
		posts.push(newPost);
		localStorage.setItem("posts", JSON.stringify(posts));
		this.setState({ blogPosts: posts });
		// console.log("added post");
	};

	render() {
		// console.log(this.state.blogPosts);
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
