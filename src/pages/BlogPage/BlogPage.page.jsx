import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class BlogPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogTitle: "",
			blogBody: "",
		};
	}

	componentDidMount() {
		console.log("componentDidMount called");
		const posts = JSON.parse(localStorage.getItem("posts"));
		console.log(posts);
		posts.map((post) =>
			post.id === "92fb590f-acbf-42fc-b4c1-0a892c3db5aa"
				? this.setState({
						blogTitle: post.title,
						blogBody: post.body,
				  })
				: "null"
		);
		// this.setState({ blogPosts: posts });
	}
	render() {
		return (
			<div>
				<h1>{this.state.blogTitle}</h1>
				<div>
					<ReactMarkdown children={this.state.blogBody} />
				</div>
			</div>
		);
	}
}

export default BlogPage;
