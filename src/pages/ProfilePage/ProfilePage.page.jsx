import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import "./ProfilePage.styles.scss";

const useStyles = (theme) => ({
	containedButton: {
		backgroundColor: "#018f01",
		color: " #fff",
		margin: "10px 0",
		"&:hover": {
			backgroundColor: "#05ce05",
		},
	},
});

class ProfilePage extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className='container'>
				<div className='user-profile'>
					<section class='user-profile__details'>
						<div className='user-profile__details--name'>
							<h4>Name</h4>
							<p>Tony Stark</p>
						</div>
						<div className='user-profile__details--username'>
							<h4>Username</h4>
							<p>IronMan2008</p>
						</div>
						<div className='user-profile__details--location'>
							<h4>Location</h4>
							<p>New York, NY</p>
						</div>
						<div className='user-profile__details--email'>
							<h4>Email</h4>
							<p>best_avenger@starkindustries.com</p>
						</div>
						<div className='user-profile__details--bio'>
							<h4>Bio</h4>
							<p>
								Without my suit of armor, I have no supernatural powers. I am
								only limited by my imagination. I am a brilliant engineer and
								have used my talents to create a powerful suit of armor that
								enables the wearer to fly, shoot beams of energy from my hands
								and chest, and resist the vacuum of space. The suit also
								protects me from damage and grants superhuman strength.{" "}
							</p>
						</div>
					</section>
				</div>
				<Button variant='contained' className={classes.containedButton}>
					Edit Profile
				</Button>
			</div>
		);
	}
}

export default withStyles(useStyles)(ProfilePage);

// <form>
/**Name**/
//<label for='name'>Name:</label>
// 	<br></br>
// 	<input type='text' name='name' id='name' />
// 	/**Username**/
// 	<br></br>
// 	<label for='username'>Username:</label>
// 	<br></br>
// 	<input type='text' name='username' id='username' />
// 	<br></br>
// 	/**Location**/
// 	<label for='name'>Location:</label>
// 	<br></br>
// 	<input type='text' name='location' id='location' />
// 	<br></br>
// 	/**Email**/
// 	<label for='email'>Email:</label>
// 	<br></br>
// 	<input type='email' name='email' id='email' />
// 	<br></br>
// 	/**Password**/
// 	<label for='password'>Password:</label>
// 	<br></br>
// 	<input type='password' name='password' id='password' />
// </form>
