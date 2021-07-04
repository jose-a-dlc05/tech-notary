import React, { useState } from "react";
import MarkedInput from "../../components/marked-input/MarkedInput.component";
import { MarkedResult } from "../../components/marked-result/MarkedResult.component";
import EditorContext from "../../components/editor-context/EditorContext.component";
import ToggableTabs from "../../components/toggable-tabs/toggable-tabs.components";
import CustomButton from "../../components/custom-button/custom-button.component";
// import { v4 as uuidv4 } from "uuid";

import "./EditorPage.styles.scss";

export default function App({ onCreate, post }) {
	const [markdownText, setMarkdownText] = useState("");
	const [blogTitle, setBlogTitle] = useState("");
	const [description, setDescription] = useState("");

	const contextValue = {
		markdownText,
		setMarkdownText,
		blogTitle,
		setBlogTitle,
		description,
		setDescription,
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
					onClick={() =>
						onCreate({ title: blogTitle, description, body: markdownText })
					}
				>
					Publish
				</CustomButton>
			</section>
		</EditorContext.Provider>
	);
}
