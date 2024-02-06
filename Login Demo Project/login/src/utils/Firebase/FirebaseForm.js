import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { createContext, useContext } from "react";

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

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseFirestore = getFirestore(firebaseApp);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = async (email, password) => {
    const { user } = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    // Add user data to Firestore
    await addUserToFirestore(user.uid, email);
    
    return user;
  };

  const addUserToFirestore = async (userId, email) => {
    try {
      await addDoc(collection(firebaseFirestore, "users"), {
        userId,
        email,
       
       
        // You can add more user data here
      });
    } catch (error) {
      console.error("Error adding user to Firestore: ", error);
    }
  };

  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
