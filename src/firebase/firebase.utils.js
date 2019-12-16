import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzJaPVGzaGjyzVVfSP_eVqLTf0sTU9ee4",
  authDomain: "my-crwn-clothing-db.firebaseapp.com",
  databaseURL: "https://my-crwn-clothing-db.firebaseio.com",
  projectId: "my-crwn-clothing-db",
  storageBucket: "my-crwn-clothing-db.appspot.com",
  messagingSenderId: "133027548770",
  appId: "1:133027548770:web:e99b79c4396564cf9a8b3b",
  measurementId: "G-D8HPZC87KD"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
