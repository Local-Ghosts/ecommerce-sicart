import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import ProductPage from "./components/ProductPage.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/product'>
          <ProductPage></ProductPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
