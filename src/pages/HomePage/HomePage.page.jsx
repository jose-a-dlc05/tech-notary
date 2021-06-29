import React, { Component } from "react";
import SearchBar from "../../components/search-bar/Search.component";
import CardList from "../../components/card-list/CardList.component";
// import { v4 as uuidv4 } from "uuid/v4";

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: this.props.blogData,
		};
	}

	render() {
		return (
			<div>
				<SearchBar />
				<CardList blogs={this.state.blogs} />
			</div>
		);
	}
}
