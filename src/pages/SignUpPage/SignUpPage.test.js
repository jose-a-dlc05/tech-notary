import React from "react";
import SignUpPage from "./SignUpPage.page";
import { render } from "@testing-library/react";

describe("Testing SignUp Component", () => {
	test("SignUp Component rendered to page", () => {
		const comp = render(<SignUpPage />);
		comp.debug();
	});
});
