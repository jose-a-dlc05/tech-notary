import firebase from "firebase/app";
// pulls in utlity library
import "firebase/firestore";
import "firebase/auth";

var config = {
	apiKey: "AIzaSyC0GAHKansDXINOpHfgwt_KtJe2CeO-Cz8",
	authDomain: "technotes-c3a96.firebaseapp.com",
	projectId: "technotes-c3a96",
	storageBucket: "technotes-c3a96.appspot.com",
	messagingSenderId: "634688571545",
	appId: "1:634688571545:web:2551cb86f9f61424ad1008",
};

/**
 *
 * This function takes an authenticated user and its properties and stores that data into firebase
 *
 * @param {user authentication object} userAuth
 * @param {object} additionalData
 * @returns userRef
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
	// checks if userAuth does not exist, exit
	if (!userAuth) return;

	// Queries inside firestore to see if userAuth object exists
	// userRef stores the queryReference object which stores the snapShot object that gives us the actual data. We can call this snapShot object a documentRef which performs CRUD methods.
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	// snapShot stores the documentRef snapShot object where we are performing a get method.
	const snapShot = await userRef.get();

	// by checking through the snapShot object's exist property if the user exists in firebase
	if (!snapShot.exists) {
		// if the user does not exist in firebase
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		// since this is an async request we are going to use the create method(.set()) to create user
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

	// return the userRef since we might want to use this in the future
	return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
