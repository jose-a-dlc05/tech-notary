import React, { useState } from "react";
import "./EditorPage.styles.scss";
import MarkedInput from "../../components/marked-input/MarkedInput.component";
import { MarkedResult } from "../../components/marked-result/MarkedResult.component";
import EditorContext from "../../components/editor-context/EditorContext.component";

export default function App() {
	const [markdownText, setMarkdownText] = useState("");

	const contextValue = {
		markdownText,
		setMarkdownText,
	};

	return (
		<EditorContext.Provider value={contextValue}>
			<section className='container'>
				<div className='editor-wrapper'>
					<MarkedInput />
					<MarkedResult />
				</div>
			</section>
		</EditorContext.Provider>
	);
}
