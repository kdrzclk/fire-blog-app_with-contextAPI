import firebase from "firebase/app";
import "firebase/auth";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const firebaseUtil = initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  // authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  // databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  // projectId: process.env.REACT_APP_FIREBASE_projectId,
  // storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  // appId: process.env.REACT_APP_FIREBASE_appId,

  apiKey: "AIzaSyD8o9yTPdGpwDODroZWDnNQPld3HAAKuiw",
  authDomain: "fire-blog-app-with-contextapi.firebaseapp.com",
  projectId: "fire-blog-app-with-contextapi",
  storageBucket: "fire-blog-app-with-contextapi.appspot.com",
  messagingSenderId: "621115234312",
  appId: "1:621115234312:web:4b1793d4e0a2edbe77d9bd",
});
// export default firebaseUtil;

export const auth = getAuth(firebaseUtil);

export const googleProvider = new GoogleAuthProvider();

// export const auth = firebaseUtil.auth();
export const firebaseDB = firebaseUtil.getDatabase();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
