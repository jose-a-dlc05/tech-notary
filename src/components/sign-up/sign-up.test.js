import React from "react";
import SignUp from "./sign-up.component";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Testing SignUp Component", () => {
	test("SignUp Component loads form header", () => {
		const comp = render(
			<MemoryRouter>
				<SignUp />
			</MemoryRouter>
		);
		// comp.debug();
		const formHeader = comp.getByTestId("sign-up");
		// Act
		const sample = formHeader.textContent;
		const result = "Enter email and password to create account";

		expect(sample).toBe(result);
	});

	test("Display name allows string to be typed", () => {
		const comp = render(
			<MemoryRouter>
				<SignUp />
			</MemoryRouter>
		);

		const displayNameInput = comp.getByTestId("onChangeDisplayName");
		fireEvent.change(displayNameInput, {
			target: { value: "User1234" },
		});

		const sample = displayNameInput.value;
		const result = "User1234";

		expect(sample).toBe(result);
	});

	test("Email field allows string to be typed", () => {
		const comp = render(
			<MemoryRouter>
				<SignUp />
			</MemoryRouter>
		);

		const emailInput = comp.getByTestId("onChangeEmail");
		fireEvent.change(emailInput, { target: { value: "email@email.com" } });

		const sample = emailInput.value;
		const result = "email@email.com";

		expect(sample).toBe(result);
	});

	test("Password Input allows string to be typed", () => {
		const comp = render(
			<MemoryRouter>
				<SignUp />
			</MemoryRouter>
		);

		const passwordInput = comp.getByTestId("onChangePassword");
		fireEvent.change(passwordInput, { target: { value: "password" } });

		const sample = passwordInput.value;
		const result = "password";

		expect(sample).toBe(result);
	});
	test("Password confirm allows string to be typed", () => {
		const comp = render(
			<MemoryRouter>
				<SignUp />
			</MemoryRouter>
		);

		const confirmPasswordInput = comp.getByTestId(
			"onChangePasswordConfirmation"
		);
		fireEvent.change(confirmPasswordInput, { target: { value: "password" } });

		const sample = confirmPasswordInput.value;
		const result = "password";

		expect(sample).toBe(result);
	});
});
