import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_8lvejZUcNENa1lCBg4bioWgJbPdL8-A",
  authDomain: "tuesdaycom.firebaseapp.com",
  projectId: "tuesdaycom",
  storageBucket: "tuesdaycom.appspot.com",
  messagingSenderId: "623359261234",
  appId: "1:623359261234:web:56b23d541bd3b7af37da2b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
