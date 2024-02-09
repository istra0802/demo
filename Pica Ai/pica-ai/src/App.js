import Header from './layout/Header/Header'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Footer from './layout/Footer/Footer';
import LastSection from './layout/LastSection/LastSection';
import SwapContent from './component/Content/SwapContent';



function App() {
  return (
    <div className="App">
    <SimpleBar style={{ maxHeight: 300 }}></SimpleBar>
    <Header />
    <SwapContent/>
    <LastSection/>
    <Footer />
    </div>
  );
}

export default App;
