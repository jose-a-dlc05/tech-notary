import React, { Component } from "react";
import CardList from "../../components/card-list/CardList.component";

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<CardList
					key={this.props.blogData.post}
					blogs={this.props.blogData}
					userId={this.props.match.params.userId}
				/>
			</div>
		);
	}
}
