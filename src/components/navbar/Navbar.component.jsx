import React, { useState } from "react";
// import { Link } from "react-router-dom";
import _ from "lodash";
import "./Navbar.styles.scss";

const Navbar = () => {
	const [menuStyles, setMenuStyles] = useState(["nav-items"]);

	const toggle = (array, item) => {
		return _.xor(array, [item]);
	};

	const handleNavClick = () => {
		// check if menuStyles includes "turn-display-off"
		// if true, then remove from menuStyles
		// else add it to menuStyles
		// add condition using setMenuStyles
		/**
		 * !menuStyles.includes("toggle-display") && "toggle-display"
		 * The conditional above is when the function is called is the
		 * inverse of what includes("toggle-display") returns. So when it is
		 * false it's actually true and returns "toggle-display" and if its
		 * false then it returns nothing
		 */
		const newStyles = [
			"nav-items",
			!menuStyles.includes("toggle-display-off") && "toggle-display-off",
		]
			.filter((style) => style)
			.join(" ");
		console.log(newStyles);
		setMenuStyles(newStyles);
	};

	return (
		<nav>
			<div className='container'>
				<div className='topbar'>
					<h1 className='logo'>
						Tech<span className='logo-accent'>N</span>otes
					</h1>
					<div className='burger' onClick={handleNavClick}>
						<div className='line1'></div>
						<div className='line2'></div>
						<div className='line3'></div>
					</div>
					<ul className='nav-items-dt'>
						<li className='nav-item-dt'>Home</li>
						<li className='nav-item-dt'>Profile</li>
						<li className='nav-item-dt'>Write Post</li>
						<li className='nav-item-dt'>Login</li>
					</ul>
				</div>
				<ul className={menuStyles}>
					<li className='nav-list-items'>
						<li className='nav-item'>Home</li>
						<li className='nav-item'>Profile</li>
						<li className='nav-item'>Write Post</li>
						<li className='nav-item'>Login</li>
					</li>
					<li className='nav-btn'>
						<a href='#' className='btn btn-ca'>
							Create Account
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
