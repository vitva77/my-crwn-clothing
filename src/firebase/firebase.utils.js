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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
