import NavigationBar from './components/Nav';
import Slider from './components/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Slider />
    </div>
  );
}

export default App;
