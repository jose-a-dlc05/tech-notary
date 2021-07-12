import React from "react";
import SignIn from "./sign-in.component";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Testing SignIn Component", () => {
	test("SignIn Component rendered to page", () => {
		const comp = render(
			<MemoryRouter>
				<SignIn />
			</MemoryRouter>
		);
		comp.debug();
	});
});
