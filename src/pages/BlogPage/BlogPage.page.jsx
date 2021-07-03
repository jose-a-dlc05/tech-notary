import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./BlogPage.styles.scss";

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
			<div className='blog-page'>
				<div className='blog-post'>
					<h1>{this.state.blogTitle}</h1>
					<div>
						<ReactMarkdown children={this.state.blogBody} />
					</div>
				</div>
				<div className='blog-update-buttons'>
					<CustomButton style={{ backgroundColor: "#0000FF" }}>
						Edit
					</CustomButton>
					<CustomButton style={{ backgroundColor: "#FF0000" }}>
						Delete
					</CustomButton>
				</div>
			</div>
		);
	}
}

export default BlogPage;
