<!-- Please update value in the {}  -->

<h1 align="left">TechNotary</h1>

<div align="center">
  <h3>
    <a href="https://tech-notary.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/jose-a-dlc05/tech-notary">
      Code Repo
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
	- [Built With](#built-with)
- [Features](#features)
- [If I had more time I would change this](#if-i-had-more-time-i-would-change-this)
- [How To Use](#how-to-use)

<!-- OVERVIEW -->

## Overview

TechNotary is a blog platform that you as a developer can use to teach others or express yourself on anything tech related. This is something that can be used individually for yourself or internally inside an organization to keep each other updated on what is new or exciting in the tech industry. With TechNotary, the only constant is change, why not consistently know what changes?

- Where can I see your demo?

  You can see my demo [here](https://tech-notary.netlify.app/)

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- React
- Materialize UI
- Firebase
- Rehype

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

- **User story:** I can log in to the website
- **User story:** I can log off from the website
- **User story:** I can register to the website
- **User story:** I can add a blog post
- **User story:** I can edit a blog post
- **User story:** I can delete a blog post
- **User story:** I can read a blog post

## If I had more time I would change this

I would think about adding more security to the site. With links it is easy to manipulate to where you are going within the site. So it is important to add a functionality which prevents users from being able to take the id from a site and using it in the URL to gain access to any blog post.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jose-a-dlc05/tech-notary.git

# Install dependencies
$ npm install

# Run the app
$ npm start

# Create in the src folder a file called firebase.util.js
  # Import the necessary firestore app and utilities
  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  # Assuming you have a firebase database set up your file according to how your config object is set up
  var config = {
	apiKey: "",
	authDomain: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
};

  # Use this snippet to store the authenticated user's properties into firebase


const createUserProfileDocument = async (userAuth, additionalData) => {
	# checks if userAuth does not exist, exit
	if (!userAuth) return;

	# Queries inside firestore to see if userAuth object exists
	# userRef stores the queryReference object which stores the snapShot object that gives us the actual data. We can call this snapShot object a documentRef which performs CRUD methods.
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	# snapShot stores the documentRef snapShot object where we are performing a get method.
	const snapShot = await userRef.get();

	# by checking through the snapShot object''s exist property if the user exists in firebase
	if (!snapShot.exists) {
		// if the user does not exist in firebase
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		# since this is an async request we are going to use the create method(.set()) to create user
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	# return the userRef since we might want to use this in the future
	return userRef;
};

# Initialize Firebase
firebase.initializeApp(config);

#Export the following
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
```
