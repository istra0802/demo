import {initializeApp} from 'firebase/app';
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider, } from 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyDDQLeGBMaOSKb0I4-2-BUY19rIvQp9QrI",
    authDomain: "crwn-clothing-db-670e5.firebaseapp.com",
    projectId: "crwn-clothing-db-670e5",
    storageBucket: "crwn-clothing-db-670e5.appspot.com",
    messagingSenderId: "602858948590",
    appId: "1:602858948590:web:f49f39f47876239d10f0ff"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters(
    {
        prompt: "seleect_account"
    }
  );
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  // provider could be multiple but  auth cannot 