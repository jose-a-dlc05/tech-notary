import React, { useContext, useState } from "react";
import "./MarkedInput.styles.scss";
import EditorContext from "../editor-context/EditorContext.component";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

function MarkedInput(props) {
	const [blogTitle, setBlogTitle] = useState("");
	const { markdownText, setMarkdownText } = useContext(EditorContext);

	const onInputChange = (event) => {
		const newValue = event.currentTarget.value;
		setMarkdownText(newValue);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(blogTitle);
		console.log(markdownText);

		setBlogTitle("");
		setMarkdownText("");
	};

	const handleChange = (event) => {
		setBlogTitle(event.target.value);
	};

	return (
		<div className='markdown-container'>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='blogTitle'
					value={blogTitle}
					onChange={handleChange}
					label='Title'
					required
				/>
				<textarea
					onChange={onInputChange}
					value={markdownText}
					rows='20'
					cols='50'
				></textarea>
				<CustomButton type='submit' onClick={props.submitPost}>
					Publish
				</CustomButton>
			</form>
		</div>
	);
}

export default MarkedInput;
