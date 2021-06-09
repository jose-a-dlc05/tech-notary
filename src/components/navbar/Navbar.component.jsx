import React from "react";
import "./Navbar.styles.scss";

export const Navbar = () => {
	const handleNavClick = () => {};

	return (
		<nav>
			<div className='container'>
				<div className='topbar'>
					<h1 className='logo'>Blog</h1>
					<div className='burger'>
						<div className='line1'></div>
						<div className='line2'></div>
						<div className='line3'></div>
					</div>
				</div>
				<ul className='nav-items'>
					<li>Home</li>
					<li>Profile</li>
					<li>Write Post</li>
					<li>Login</li>
					<li>Create Account</li>
				</ul>
			</div>
		</nav>
	);
};
