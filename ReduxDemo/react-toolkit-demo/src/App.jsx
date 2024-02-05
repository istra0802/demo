// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CakeView from './feature/cake/CakeView'
import IceCreamView from './feature/iceCream/iceCreamView'
import UserView from './feature/user/userView'

function App() {
 

  return (
    <div className='App'>
     <CakeView/>
    <IceCreamView/>
     <UserView/>
    </div>
  )
}

export default App
