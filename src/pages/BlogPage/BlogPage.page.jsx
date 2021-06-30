import React, { Component } from "react";

class BlogPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogTitle: "",
			blogDescription: "",
		};
	}

	componentDidMount() {
		console.log("componentDidMount called");
		const posts = JSON.parse(localStorage.getItem("posts"));
		posts.map((post) =>
			post.id === "459ai"
				? this.setState({
						blogTitle: post.title,
						blogDescription: post.description,
				  })
				: "null"
		);
		// this.setState({ blogPosts: posts });
	}
	render() {
		return (
			<div>
				<h1>{this.state.blogTitle}</h1>
				<div>{this.state.blogDescription}</div>
			</div>
		);
	}
}

export default BlogPage;
