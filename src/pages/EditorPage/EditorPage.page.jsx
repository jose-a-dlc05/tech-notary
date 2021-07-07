import React, { useState } from "react";
import MarkedInput from "../../components/marked-input/MarkedInput.component";
import { MarkedResult } from "../../components/marked-result/MarkedResult.component";
import EditorContext from "../../components/editor-context/EditorContext.component";
import ToggableTabs from "../../components/toggable-tabs/toggable-tabs.components";
import CustomButton from "../../components/custom-button/custom-button.component";
// import { firestore } from "../../firebase.util";
// import { v4 as uuidv4 } from "uuid";

import "./EditorPage.styles.scss";

export default function App({ onCreate, onUpdate, match }) {
	const [markdownText, setMarkdownText] = useState("");
	const [blogTitle, setBlogTitle] = useState("");
	const [description, setDescription] = useState("");

	// useEffect(() => {
	// 	getPost(match.params.id);
	// }, [match.params.id]);

	const contextValue = {
		markdownText,
		setMarkdownText,
		blogTitle,
		setBlogTitle,
		description,
		setDescription,
	};

	// const getPost = (id) => {
	// 	firestore
	// 		.collection("posts")
	// 		.get()
	// 		.then((data) => {
	// 			data.forEach((post) =>
	// 				post.id === id ? console.log(post.data()) : null
	// 			);
	// 		});
	// };

	// if (match.params.id && !blogTitle && !markdownText && !description) {
	// 	const blogPost = getPost(match.params.id);
	// }

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
					// onClick={() => {
					// 	match.params.id
					// 		? onUpdate({
					// 				id: match.params.id,
					// 				title: blogTitle,
					// 				description,
					// 				body: markdownText,
					// 		  })
					// 		: onCreate({ title: blogTitle, description, body: markdownText });
					// }}
					onClick={() => {
						onCreate({ title: blogTitle, description, body: markdownText });
					}}
				>
					Publish
				</CustomButton>
			</section>
		</EditorContext.Provider>
	);
}
