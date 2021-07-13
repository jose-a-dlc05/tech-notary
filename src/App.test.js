import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe.only("Testing App Component", () => {
	test("Logo rendered to Navbar", () => {
		// Arrange
		const comp = render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		// Act
		// comp.debug();
		const logoElement = comp.getByTestId("logo");
		const sample = logoElement.textContent;
		const result = "TechNotes";
		// Assert
		expect(sample).toBe(result);
	});
});
