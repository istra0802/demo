import Header from "./layout/Header/Header";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer/Footer";
import Pricing from "./component/Pricing/Pricing";
import Content from "./component/Content/Content";

function App() {
  return (
    <div className="App">
      <SimpleBar style={{ maxHeight: 300 }}></SimpleBar>
      <Header />
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
