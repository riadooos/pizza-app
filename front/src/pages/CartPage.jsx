import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../redux/actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import Checkout from "../components/Checkout";

const CartPage = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  let subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();
  return (
    <Layout>
      <div className="row d-flex flex-row justify-content-center">
        <div className="col-md-8  w-100">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          {cartItems.map((item, index) => {
            return (
              <div className="d-flex" key={index}>
                <div className="text-left">
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price: {item.quantity} * {item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity: </h1>
                  <FaPlus
                    style={{ color: "green", margin: "5px" }}
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  />
                  <b>{item.quantity}</b>
                  <FaMinus
                    style={{ color: "red", margin: "5px" }}
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  />
                  <hr />
                </div>
                <div>
                  <img
                    src={item.image}
                    style={{ height: "80px", width: "80px" }}
                    alt={item.name}
                  />
                </div>
                <div>
                  <FaTrash
                    style={{ color: "red", margin: "5px" }}
                    onClick={() => dispatch(deleteFromCart(item))}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "45px" }}>SubTotal: {subtotal}</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
