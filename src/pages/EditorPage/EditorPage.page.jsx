import React, { useEffect, useState } from "react";
import MarkedInput from "../../components/marked-input/MarkedInput.component";
import { MarkedResult } from "../../components/marked-result/MarkedResult.component";
import EditorContext from "../../components/editor-context/EditorContext.component";
import ToggableTabs from "../../components/toggable-tabs/toggable-tabs.components";
import CustomButton from "../../components/custom-button/custom-button.component";
import { firestore } from "../../firebase.util";
import { Redirect } from "react-router";
import "./EditorPage.styles.scss";

export default function App({ onCreate, onUpdate, match }) {
	const [markdownText, setMarkdownText] = useState("");
	const [blogTitle, setBlogTitle] = useState("");
	const [description, setDescription] = useState("");
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		if (match.params.id && !blogTitle && !markdownText && !description) {
			getPost(match.params.id).then((blogPost) => {
				setBlogTitle(blogPost.title);
				setDescription(blogPost.description);
				setMarkdownText(blogPost.body);
			});
		}
	}, []);

	const contextValue = {
		markdownText,
		setMarkdownText,
		blogTitle,
		setBlogTitle,
		description,
		setDescription,
	};

	const getPost = async (id) => {
		const db = firestore.collection("posts").doc(id);
		const post = (await db.get()).data();
		return post;
	};

	return (
		<EditorContext.Provider value={contextValue}>
			<section className='editor-container'>
				<ToggableTabs>
					<div label='Markdown'>
						<MarkedInput onCreate={onCreate} />
					</div>
					<div label='Preview'>
						<MarkedResult />
					</div>
				</ToggableTabs>
				<CustomButton
					className='custom-button'
					onClick={async () => {
						if (match.params.id) {
							await onUpdate({
								id: match.params.id,
								title: blogTitle,
								description,
								body: markdownText,
							});
						} else {
							await onCreate({
								title: blogTitle,
								description,
								body: markdownText,
							});
						}

						setRedirect(true);
					}}
				>
					Publish
				</CustomButton>
				{redirect ? <Redirect to={"/"} /> : null}
			</section>
		</EditorContext.Provider>
	);
}
