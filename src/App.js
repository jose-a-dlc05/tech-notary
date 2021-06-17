import React, { Component } from "react";
import Navbar from "./components/nav-bar/Navbar.component";
// import HomePage from "./pages/HomePage/HomePage.page";
import EditorPage from "./pages/EditorPage/EditorPage.page";
// import ProfilePage from "./pages/ProfilePage/ProfilePage.page";
import "./App.styles.scss";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<EditorPage />
			</div>
		);
	}
}

export default App;
