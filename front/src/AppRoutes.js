import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import OrdersPage from "./pages/OrdersPage";
import AdminPage from "./pages/AdminPage";
import EditPizzas from "./adminPages/EditPizzas";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/orders" component={OrdersPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
