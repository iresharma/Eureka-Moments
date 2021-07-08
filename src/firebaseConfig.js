import firebase from "firebase";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyBvOIkVscYuoV5jcluMm7nYgCB9eXbyIow",
  authDomain: "eureka-moments.firebaseapp.com",
  projectId: "eureka-moments",
  storageBucket: "eureka-moments.appspot.com",
  messagingSenderId: "1016469408586",
  appId: "1:1016469408586:web:733f5cbda6a609b3648fb3",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const googProvide = firebase.auth;

export default { db, auth, googProvide };
