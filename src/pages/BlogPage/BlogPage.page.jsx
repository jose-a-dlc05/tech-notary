import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CustomButton from "../../components/custom-button/custom-button.component";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase.util";
import "./BlogPage.styles.scss";

class BlogPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogTitle: "",
			blogBody: "",
			blogUserId: "",
		};
	}

	componentDidMount() {
		this.getPost(this.props.match.params.param);
		// this.setState({ blogPosts: posts });
	}

	getPost = (id) => {
		firestore
			.collection("posts")
			.get()
			.then((data) => {
				data.forEach((post) =>
					post.id === id
						? this.setState({
								blogTitle: post.data().title,
								blogBody: post.data().body,
								blogUserId: post.data().userId,
						  })
						: null
				);
			});
	};

	render() {
		return (
			<div className='blog-page'>
				<div className='blog-post'>
					<h1>{this.state.blogTitle}</h1>
					<div>
						<ReactMarkdown
							children={this.state.blogBody}
							rehypePlugins={[rehypeHighlight]}
						/>
					</div>
				</div>
				{this.props.currentUser &&
				this.props.currentUser.id === this.state.blogUserId ? (
					<div className='blog-update-buttons'>
						<Link
							to={`/createpost/${this.props.match.params.param}`}
							style={{
								color: "white",
								width: "100%",
								overflow: "none",
							}}
						>
							<CustomButton
								style={{ backgroundColor: "#0000FF", marginLeft: "5%" }}
							>
								Edit
							</CustomButton>
						</Link>

						<CustomButton
							style={{ backgroundColor: "#FF0000" }}
							onClick={() => this.props.onDelete(this.props.match.params.param)}
						>
							Delete
						</CustomButton>
					</div>
				) : null}
			</div>
		);
	}
}

export default BlogPage;
