import React, { useContext } from "react";
import "./MarkedInput.styles.scss";
import EditorContext from "../editor-context/EditorContext.component";
import FormInput from "../form-input/form-input.component";

function MarkedInput() {
	const {
		markdownText,
		setMarkdownText,
		blogTitle,
		setBlogTitle,
		description,
		setDescription,
	} = useContext(EditorContext);

	const onInputBodyChange = (event) => {
		const newValue = event.currentTarget.value;
		setMarkdownText(newValue);
	};

	const onInputTitleChange = (event) => {
		const newValue = event.currentTarget.value;
		setBlogTitle(newValue);
	};

	const onInputDescriptionChange = (event) => {
		const newValue = event.currentTarget.value;
		setDescription(newValue);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(blogTitle);
		console.log(markdownText);
		console.log(description);

		setBlogTitle("");
		setMarkdownText("");
		setDescription("");
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
				<FormInput
					type='text'
					name='description'
					value={description}
					onChange={onInputDescriptionChange}
					label='Post Description'
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
