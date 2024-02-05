import React from 'react'
import {signInWithGooglePopup } from '../../../utils/firebase/firebase.utils'
import { createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';
import SignUpForm from '../../../components/sign-in-form/sign-up-form.component';
import SignInForm from '../../../components/sign-in-form/sign-in-form.component';

export default function Authentication() {

  const logGoogleUser = async () =>
  {
    const {user} = await signInWithGooglePopup();
    await  createUserDocumentFromAuth(user)
  }

  
  return (
    <div>

      <h1>Sign in page </h1>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
