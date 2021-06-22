import React, { useState } from "react";
import MarkedInput from "../../components/marked-input/MarkedInput.component";
import { MarkedResult } from "../../components/marked-result/MarkedResult.component";
import EditorContext from "../../components/editor-context/EditorContext.component";
import ToggableTabs from "../../components/toggable-tabs/toggable-tabs.components";


import "./EditorPage.styles.scss";
import SignInPage from "../SignInPage/SignInPage.page";

export default function App() {
	const [markdownText, setMarkdownText] = useState("");

	const contextValue = {
		markdownText,
		setMarkdownText,
	};

	return (
		<EditorContext.Provider value={contextValue}>
			<section className='editor-container'>
				<ToggableTabs tabObjects={[
					{name:"Markdown",component: <MarkedInput />}, 
					{name:"Preview",component: <MarkedResult /> }, 
					{name:"Publish", component: "Publish Form Coming Soon"}
					]
				} 
				/>
				{/*<div className='editor-items'>
					<MarkedInput />
					<MarkedResult />
	</div>*/}
			</section>
		</EditorContext.Provider>
	);
}





/**.custom-button {
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: #018f01;
	color: #fff;
	text-transform: uppercase;
	font-family: sans-serif;
	font-weight: bolder;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #05ce05;
	}
} */