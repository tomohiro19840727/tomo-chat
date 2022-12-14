import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXNlFWgVBhypnLKUdW6fKCDix1Dr70DC4",
  authDomain: "tomo-chat-c1f71.firebaseapp.com",
  projectId: "tomo-chat-c1f71",
  storageBucket: "tomo-chat-c1f71.appspot.com",
  messagingSenderId: "690167790496",
  appId: "1:690167790496:web:d66ceaa4fd47b8951882c5"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };