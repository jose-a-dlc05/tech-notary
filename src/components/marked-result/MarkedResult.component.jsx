import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import EditorContext from "../editor-context/EditorContext.component";
import CodeBlock from "../syntax-highlighter/CodeBlock.component";
import "./MarkedResult.styles.scss";

export function MarkedResult(props) {
	const { markdownText } = useContext(EditorContext);

	return (
		<section className='result-container'>
			<h2 className='result-title'>Preview</h2>
			<div className='result-area'>
				<ReactMarkdown
					children={markdownText}
					components={{ code: CodeBlock }}
				/>
			</div>
		</section>
	);
}
