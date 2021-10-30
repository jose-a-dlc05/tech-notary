import React from "react";
import Navbar from "./Navbar.component";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Testing Navbar Component", () => {
	test("Navbar Component rendered to page", () => {
		const comp = render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);
	});
});
