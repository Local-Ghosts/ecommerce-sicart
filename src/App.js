import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import ProductPage from "./components/ProductPage.js";
import ShopComponent from "./components/shopPage.jsx";
import Account from "./components/Account";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/product/:id'>
          <ProductPage></ProductPage>
        </Route>
        <Route exact path='/shop'>
          <ShopComponent></ShopComponent>
        </Route>
        <Route exact path='/profile'>
          <Account></Account>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
