import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Testing App Component", () => {
	test("App Component rendered to page", () => {
		const comp = render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		comp.debug();
	});
});
