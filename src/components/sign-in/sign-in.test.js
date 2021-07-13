import React from "react";
import SignIn from "./sign-in.component";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Testing SignIn Component", () => {
	test("SignIn Component loads form header", () => {
		const comp = render(
			<MemoryRouter>
				<SignIn />
			</MemoryRouter>
		);
		// comp.debug();
		const formHeader = comp.getByTestId("sign-in");
		// Act
		const sample = formHeader.textContent;
		const result = "Sign in with your email and password";

		expect(sample).toBe(result);
	});

	test("Email Input allows string to be typed", () => {
		const comp = render(
			<MemoryRouter>
				<SignIn />
			</MemoryRouter>
		);

		const emailInput = comp.getByTestId("onChangeInputEmail");
		fireEvent.change(emailInput, { target: { value: "email@email.com" } });

		const sample = emailInput.value;
		const result = "email@email.com";

		expect(sample).toBe(result);
	});

	test("Password Input allows string to be typed", () => {
		const comp = render(
			<MemoryRouter>
				<SignIn />
			</MemoryRouter>
		);

		const passwordInput = comp.getByTestId("onChangeInputPassword");
		fireEvent.change(passwordInput, { target: { value: "password" } });

		const sample = passwordInput.value;
		const result = "password";

		expect(sample).toBe(result);
	});
});
