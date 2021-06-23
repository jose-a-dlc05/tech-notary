import React, { useContext, useState } from "react";
import "./MarkedInput.styles.scss";
import EditorContext from "../editor-context/EditorContext.component";
import FormInput from "../form-input/form-input.component";

function MarkedInput(props) {
	const [input, setInput] = useState({ blogTitle: "" });
	const { setMarkdownText } = useContext(EditorContext);

	const onInputChange = (event) => {
		const newValue = event.currentTarget.value;
		setMarkdownText(newValue);
	};

	const handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	return (
		<div className='markdown-container'>
			<FormInput
				type='text'
				name='blogTitle'
				value={input.blogTitle}
				onChange={handleChange}
				label='Title'
				required
			/>
			<textarea onChange={onInputChange} rows='20' cols='50'></textarea>
		</div>
	);
}

export default MarkedInput;
