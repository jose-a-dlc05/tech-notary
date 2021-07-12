import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.util";
import "./Navbar.styles.scss";

const Navbar = ({ currentUser }) => {
	const [menuStyles, setMenuStyles] = useState(["nav-items"]);

	const handleNavClick = () => {
		/**
		 * !menuStyles.includes("active") && "active"
		 * The conditional above is when the function is called is the
		 * inverse of what includes("active") returns. So when it is
		 * false it's actually true and returns "active" and if its
		 * false then it returns nothing
		 */
		const newStyles = ["nav-items", !menuStyles.includes("active") && "active"]
			.filter((style) => style)
			.join(" ");

		setMenuStyles(newStyles);
	};

	return (
		<nav>
			<div className='container'>
				<div className='topbar'>
					<div className='header-wrapper'>
						<h1 className='logo'>
							<Link style={{ textDecoration: "none", color: "black" }} to='/'>
								Tech<span className='logo-accent'>N</span>otes
							</Link>
						</h1>
						<div className='burger' onClick={handleNavClick}>
							<div className='line1'></div>
							<div className='line2'></div>
							<div className='line3'></div>
						</div>
					</div>
					{currentUser !== undefined && (
						<ul className={menuStyles}>
							<li className='nav-list-items'>
								<Link className='nav-item' to='/'>
									Home
								</Link>

								{currentUser ? (
									<>
										<Link
											className='nav-item'
											to={`/posts/user/${currentUser.id}`}
										>
											My Posts
										</Link>
										<Link className='nav-item' to='/createpost'>
											Write Post
										</Link>
										<Link
											className='nav-item'
											to='/'
											onClick={() => auth.signOut()}
										>
											Log out
										</Link>
									</>
								) : (
									<>
										<Link className='nav-item' to='/login'>
											Log in
										</Link>

										<div className='nav-btn'>
											<Link className='btn btn-ca' to='/signup'>
												Create Account
											</Link>
										</div>
									</>
								)}
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
