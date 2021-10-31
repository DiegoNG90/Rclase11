import React, { Suspense } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Loader from "../Components/Loader";
import Search from "../Components/Search";

const ProductsView = React.lazy(() => import("../Pages/Products/Products"));
const ProductView = React.lazy(() => import("../Pages/Product/Product"));

const Routes = () => (
  <Router>
    <Search />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/products" exact>
          <ProductsView />
        </Route>
        <Route path="/product/:id">
          <ProductView />
        </Route>

        <Redirect to="/products" />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
