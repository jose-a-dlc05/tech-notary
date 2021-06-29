import React from "react";

const defaultContext = {
	blogTitle: "",
	setBlogTitle: "",
	markdownText: "",
	setMarkdownText: "",
};

export default React.createContext(defaultContext);
