import Header from "./layout/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer/Footer";
import Pricing from "./component/Pricing/Pricing";
import Content from "./component/Content/Content";
import "./App.scss"
function App() {
  return (
    <div class="app">
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
