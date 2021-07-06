import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { Redirect } from "react-router";
import { auth } from "../../firebase.util";

import "./sign-in.styles.scss";

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			redirect: null,
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "", redirect: true });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { redirect, email, password } = this.state;
		if (redirect) {
			return <Redirect to={"/"} />;
		}
		return (
			<div className='sign-in'>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						onChange={this.handleChange}
						value={email}
						label='email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						onChange={this.handleChange}
						value={password}
						label='password'
						required
					/>
					<CustomButton type='submit'>Log in</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
