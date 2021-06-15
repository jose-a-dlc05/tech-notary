import React, { Component } from "react";
import Navbar from "./components/nav-bar/Navbar.component";
import SearchBar from "./components/search-bar/Search.component";
import "./App.styles.scss";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<SearchBar />
			</div>
		);
	}
}

export default App;
