import React from "react";
import SignInPage from "./SignInPage.page";
import { render } from "@testing-library/react";

describe("Testing SignIn Component", () => {
	test("SignIn Component rendered to page", () => {
		const comp = render(<SignInPage />);
	});
});
