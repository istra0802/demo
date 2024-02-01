import React from 'react'
import {signInWithGooglePopup} from '../../../utils/firebase/firebase.utils'

export default function Sign() {
  const logGoogleUser = async () =>
  {
    const response = await signInWithGooglePopup();
    console.log(response);
  }
  return (
    <div>

      <h1>Sign in page </h1>
      <button onClick={logGoogleUser}>
        Sign in with the google 
      </button>
    </div>
  )
}
