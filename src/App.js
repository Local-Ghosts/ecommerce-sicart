import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import ProductPage from "./components/ProductPage.js";
import ShopPage from "./components/shopPage";
import Account from "./components/Account";
import CartPage from "./components/cartPage/CartPage"

import "./App.css";
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
        <Route exact path='/shop/:id'>
          <ShopPage></ShopPage>
        </Route>
        <Route exact path='/profile'>
          <Account></Account>
        </Route>
        <Route exact path='/cart'>
          <CartPage></CartPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
