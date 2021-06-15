import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import "./Search.styles.scss";

export default class SearchBar extends Component {
	render() {
		return (
			<div className='container'>
				<Search className='input-search' />
			</div>
		);
	}
}
