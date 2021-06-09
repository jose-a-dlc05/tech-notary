import React, { Component } from "react";
import { Navbar } from "./components/navbar/Navbar.component";
import "./App.styles.scss";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
			</div>
		);
	}
}

export default App;
