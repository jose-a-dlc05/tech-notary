import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.styles.scss";

import Navbar from "./components/nav-bar/Navbar.component";
import HomePage from "./pages/HomePage/HomePage.page";
import CredentialsPage from "./pages/SignInPage/CredentialsPage.page";
import EditorPage from "./pages/EditorPage/EditorPage.page";
import ProfilePage from "./pages/ProfilePage/ProfilePage.page";

import "semantic-ui-css/semantic.min.css";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/login' component={CredentialsPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
