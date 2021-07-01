import React, { useContext } from "react";
import "./MarkedInput.styles.scss";
import EditorContext from "../editor-context/EditorContext.component";
import FormInput from "../form-input/form-input.component";

function MarkedInput(props) {
	const { markdownText, setMarkdownText, blogTitle, setBlogTitle } =
		useContext(EditorContext);

	const onInputBodyChange = (event) => {
		const newValue = event.currentTarget.value;
		setMarkdownText(newValue);
	};

	const onInputTitleChange = (event) => {
		const newValue = event.currentTarget.value;
		setBlogTitle(newValue);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(blogTitle);
		console.log(markdownText);

		setBlogTitle("");
		setMarkdownText("");
	};
	return (
		<div className='markdown-container'>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='blogTitle'
					value={blogTitle}
					onChange={onInputTitleChange}
					label='Title'
				/>
				<textarea
					onChange={onInputBodyChange}
					value={markdownText}
					rows='20'
					cols='50'
				></textarea>
			</form>
		</div>
	);
}

export default MarkedInput;
