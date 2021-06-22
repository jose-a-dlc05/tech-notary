import React, { useContext } from "react";
import "./MarkedInput.styles.scss";
import EditorContext from "../editor-context/EditorContext.component";

function MarkedInput(props) {
	const { setMarkdownText } = useContext(EditorContext);

	const onInputChange = (event) => {
		const newValue = event.currentTarget.value;
		setMarkdownText(newValue);
	};

	return (
		<div className='markdown-container'>
			<textarea onChange={onInputChange}></textarea>
		</div>
	);
}

export default MarkedInput;
