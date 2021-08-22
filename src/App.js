import ProductPage from "./components/ProductPage";
import Slider from './components/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import NavigationBar from './components/Nav';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
 {/* I am mad */}

      <NavigationBar />
      <Slider />
      <ProductPage/>
    </div>
  );
}

export default App;
