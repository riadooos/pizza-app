import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas } from "../redux/actions/pizzasAction";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const PizzasList = () => {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, loading, error } = pizzasState;
  console.log(pizzas, loading, error);

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <div>
      <h2
        style={{
          fontSize: "23px",
          textAlign: "center",
          textDecoration: "underline",
          color: "#ff1245",
        }}
      >
        <b>PizzasList</b>
      </h2>
      {loading && <Loading />}
      {error && <Error error="something went Error" />}
      <table className="table table-bordered">
        <thead
          className="thead-dark"
          style={{ backgroundColor: "grey", color: "white" }}
        >
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza, index) => {
            return (
              <tr key={index}>
                <td>{pizza.name}</td>
                <td>
                  Small: {pizza.prices[0]["small"]} <br />
                  Medium: {pizza.prices[0]["medium"]} <br />
                  Large: {pizza.prices[0]["large"]}
                </td>
                <td>{pizza.category}</td>
                <td>
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    width="50px"
                    height="50px"
                  />
                </td>
                <td>
                  <FaTrash style={{ color: "red", marginRight: "3px" }} />
                  <Link to={`/admin/edit-pizza/${pizza._id}`}>
                    <FaEdit />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PizzasList;
