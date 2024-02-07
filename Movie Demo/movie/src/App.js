import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Routes>
      <Header />
      <Route to='/' element={<Home/>}></Route>
      <Route to='/movie' element={<MovieDetails/>}></Route>
      <Route to='/' element={<PageNotFound/>}></Route>
      <Footer />
      </Routes>
    </div>
  );
}

export default App;
