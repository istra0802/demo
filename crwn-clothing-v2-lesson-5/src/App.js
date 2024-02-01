import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/home/navigation/navigation.component';
// import SignIn from './routes/home/sign-in/sign-in.component'
import Authentication from './routes/home/authentication/authentication.component';
  
const Shop = () => {
  return <h1> i m in the shop page </h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>

        <Route index element={<Home />} />
        <Route path='/shop' element = {<Shop />} />
        <Route path='sign-In' element = {<Authentication/>}/>
      </Route>
    </Routes>
  );
};

export default App;

// still working

// not complete
