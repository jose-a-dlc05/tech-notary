import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';
import EditorContext from "../editor-context/EditorContext.component";
import "./MarkedResult.styles.scss";

export function MarkedResult(props) {
	const { markdownText } = useContext(EditorContext);

	return (
		<section className='result-container'>
			<div className='result-area'>
				<ReactMarkdown
					children={markdownText}
					rehypePlugins={[rehypeHighlight]}
				/>
			</div>
		</section>
	);
}
