import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Switch, Route } from "react-router-dom";
import UsersList from "../adminPages/UsersList";
import OrdersList from "../adminPages/OrdersList";
import PizzasList from "../adminPages/PizzasList";
import AddPizzas from "../adminPages/AddPizzas";
import EditPizzas from "../adminPages/EditPizzas";

const AdminPage = () => {
  const userState = useSelector((state) => state.loginReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!currentUser.isAdmin) {
      history.push("/");
    }
  }, []);
  return (
    <>
      <Layout>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
            <ul className="adminFunction d-flex justify-content-between">
              <li>
                <a href="/admin/users-list">Users List</a>
              </li>
              <li>
                <a href="/admin/pizzas-list">Pizzas List</a>
              </li>
              <li>
                <a href="/admin/new-pizza">Add New Pizza</a>
              </li>
              <li>
                <a href="/admin/orders-list">Orders List</a>
              </li>
            </ul>
            <Switch>
              <Route exact path="/admin" component={UsersList} />
              <Route exact path="/admin/users-list" component={UsersList} />
              <Route exact path="/admin/pizzas-list" component={PizzasList} />
              <Route exact path="/admin/new-pizza" component={AddPizzas} />
              <Route exact path="/admin/orders-list" component={OrdersList} />
              <Route
                exact
                path="/admin/edit-pizza/:pizzaId"
                component={EditPizzas}
              />
            </Switch>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminPage;
