import React from "react";

const defaultContext = {
	description: "",
	setDescription: "",
	blogTitle: "",
	setBlogTitle: "",
	markdownText: "",
	setMarkdownText: "",
	indexedPost: "",
	setIndexedPost: "",
};

export default React.createContext(defaultContext);
