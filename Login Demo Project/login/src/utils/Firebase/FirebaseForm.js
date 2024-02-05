// import React from 'react'
import {createContext, useContext } from "react"
import { initializeApp } from "firebase/app";
import {getAuth, createAuthUserWithEmailAndPassword} from "firebase/auth"
const FirebaseContext = createContext(null);


const firebaseConfig = {
  apiKey: "AIzaSyCAG1Ni_sbh_5x7VwE-C-KQ0zshWyF-lEM",
  authDomain: "login-form-192d9.firebaseapp.com",
  projectId: "login-form-192d9",
  storageBucket: "login-form-192d9.appspot.com",
  messagingSenderId: "1036853522070",
  appId: "1:1036853522070:web:a41dfca043de9175a71cb7",
  measurementId: "G-EZ5BTNCBGJ"
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)

export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password ) => createAuthUserWithEmailAndPassword(firebaseAuth, email,password)
    return <FirebaseContext.Provider value ={{signupUserWithEmailAndPassword}}>{props.children}</FirebaseContext.Provider>
}


