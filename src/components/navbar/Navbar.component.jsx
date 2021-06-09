import React, { useState } from "react";
import "./Navbar.styles.scss";

export const Navbar = () => {
	const [menuStyles, setMenuStyles] = useState(["nav-items"]);

	const handleNavClick = () => {
		const newStyles = [
			"nav-items",
			!menuStyles.includes("toggleDisplay") && "toggleDisplay",
		].filter((style) => style);
		setMenuStyles(newStyles);
	};

	return (
		<nav>
			<div className='container'>
				<div className='topbar'>
					<h1 className='logo'>Blog</h1>
					<div className='burger' onClick={handleNavClick}>
						<div className='line1'></div>
						<div className='line2'></div>
						<div className='line3'></div>
					</div>
				</div>
				<ul className={menuStyles}>
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
