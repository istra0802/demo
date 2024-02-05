// import logo from './logo.svg';
import Loginn from "./components/Loginn/Loginn";
import Signupp from "./components/Signup/Signupp";
// import Navbar from "./components/Navbar/NavbarHeader";
import Home from "./components/Navbar/Home";
import About from "./components/Navbar/About";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginn />} />
        <Route path="/signupp" element={<Signupp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
       
      </Routes>
    </div>
  );
}

export default App;

// <p>
// <Navbar />
//     //   <Routes>
//     //   <Route path='/' element={<Home />} />
//     //   <Route path='/about' element={<About />} />

//     // </Routes>
// </p>
