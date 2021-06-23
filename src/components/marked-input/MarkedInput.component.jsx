import React, { useContext, useState } from "react";
import "./MarkedInput.styles.scss";
import EditorContext from "../editor-context/EditorContext.component";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

function MarkedInput(props) {
	const [input, setInput] = useState({ blogTitle: "", bodyText: "" });
	const { setMarkdownText } = useContext(EditorContext);

	const onInputChange = (event) => {
		const newValue = event.currentTarget.value;
		setMarkdownText(newValue);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		this.setInput({ blogTitle: "", bodyText: "" });
	};

	const handleChange = (event) => {
		const { value, name } = event.target;

		this.setInput({ [name]: value });
	};

	return (
		<div className='markdown-container'>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='blogTitle'
					value={input.blogTitle}
					onChange={handleChange}
					label='Title'
					required
				/>
				<textarea onChange={onInputChange} rows='20' cols='50'></textarea>
				<CustomButton type='submit'>Publish</CustomButton>
			</form>
		</div>
	);
}

export default MarkedInput;
