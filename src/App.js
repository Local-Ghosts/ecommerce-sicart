import ProductPage from "./components/ProductPage";
import Slider from './components/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import NavigationBar from './components/Nav';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* <Slider /> */}
      <ProductPage/>
    </div>
  );
}

export default App;
