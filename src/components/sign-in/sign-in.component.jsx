import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: "", password: "" });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						onChange={this.handleChange}
						value={this.state.email}
						label='email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						onChange={this.handleChange}
						value={this.state.password}
						label='password'
						required
					/>
					<input type='submit' />
				</form>
			</div>
		);
	}
}

export default SignIn;
