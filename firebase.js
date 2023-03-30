import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDi0h4JNodz9NHoL4YpYlzq1NL0PRL5EHU",
  authDomain: "linkedin-clone-60eb3.firebaseapp.com",
  projectId: "linkedin-clone-60eb3",
  storageBucket: "linkedin-clone-60eb3.appspot.com",
  messagingSenderId: "864347974368",
  appId: "1:864347974368:web:2dc8df05567b4b6803be85",
  measurementId: "G-53XBN58JC3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
