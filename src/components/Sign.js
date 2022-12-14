import React from 'react'
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js"

const Sign = () => {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>サインインする</button>
  )
}

export default Sign