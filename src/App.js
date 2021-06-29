import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.styles.scss";

import Navbar from "./components/nav-bar/Navbar.component";
import HomePage from "./pages/HomePage/HomePage.page";
import SignInPage from "./pages/SignInPage/SignInPage.page";
import SignUpPage from "./pages/SignUpPage/SignUpPage.page";
import EditorPage from "./pages/EditorPage/EditorPage.page";
import blogPosts from "./data/posts";
// import ProfilePage from "./pages/ProfilePage/ProfilePage.page";

import "semantic-ui-css/semantic.min.css";

class App extends Component {
	state = {
		blogPosts: blogPosts,
	};

	onSubmitHandleAdd = (event) => {
		event.preventDefault();

		this.setState({
			blogs: [
				...this.state.blogs,
				{
					title: "Understanding React",
					technology: "React",
					description: `Rorschach would say you have a hard time relating to others. Cops, another community I'm not part of. Rorschach would say you have a hard time relating to others. I'm going to tell you something that I've never told anyone before.`,
					id: "459ai",
				},
			],
		});
	};

	render() {
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
					<Route path='/postcreate' component={EditorPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
