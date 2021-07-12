import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe.only("Testing App Component", () => {
	test("App Component rendered to page", () => {
		// Arrange
		const comp = render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		// Act
		comp.debug();
		console.log(comp.container.getElementsByClassName("card-list")[0]);
		//
	});
});
