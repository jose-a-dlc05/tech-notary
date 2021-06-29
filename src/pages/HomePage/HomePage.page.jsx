import React, { Component } from "react";
import SearchBar from "../../components/search-bar/Search.component";
import CardList from "../../components/card-list/CardList.component";

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<CardList blogs={this.props.blogData} />
			</div>
		);
	}
}
