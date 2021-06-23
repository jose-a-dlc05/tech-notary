import React, { useState } from "react";
import MarkedInput from "../../components/marked-input/MarkedInput.component";
import { MarkedResult } from "../../components/marked-result/MarkedResult.component";
import EditorContext from "../../components/editor-context/EditorContext.component";
import ToggableTabs from "../../components/toggable-tabs/toggable-tabs.components";

import "./EditorPage.styles.scss";

export default function App() {
	const [markdownText, setMarkdownText] = useState("");

	const contextValue = {
		markdownText,
		setMarkdownText,
	};

	return (
		<EditorContext.Provider value={contextValue}>
			<section className='editor-container'>
				<ToggableTabs>
					<div label='Markdown'>
						<MarkedInput />
					</div>
					<div label='Preview'>
						<MarkedResult />
					</div>
				</ToggableTabs>
			</section>
		</EditorContext.Provider>
	);
}
