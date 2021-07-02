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
		this.getPost(this.props.match.params.param);
		// this.setState({ blogPosts: posts });
	}

	getPost = (id) => {
		const posts = JSON.parse(localStorage.getItem("posts"));
		posts.map((post) =>
			post.id === id
				? this.setState({
						blogTitle: post.title,
						blogBody: post.body,
				  })
				: "null"
		);
	};

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
