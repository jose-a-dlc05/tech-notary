import React from "react";

const defaultContext = {
	description: "",
	setDescription: "",
	blogTitle: "",
	setBlogTitle: "",
	markdownText: "",
	setMarkdownText: "",
};

export default React.createContext(defaultContext);
