import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, value }) => {
	let newCode = value;
	// let oldCode = value || oldCode;
	return (
		<SyntaxHighlighter language={language} style={tomorrow}>
			{newCode || ""}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
