import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrderAction } from "../redux/actions/orderActions";
import Success from "./Success";
import Loading from "./Loading";
import Error from "./Error";

const Checkout = ({ subtotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, success, error } = orderState;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrderAction(token, subtotal));
  }
  return (
    <div>
      {loading && <Loading />}
      {success && <Success success="Your Order Placed Successfully" />}
      {error && <Error error="Something went Wrong" />}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        currency="DZD"
        stripeKey="pk_test_51M2MsaCrjwbYsMlFHCDwMyvviDQhovInXJPSzCXP0CUjj05GRJ7d8TvuazWk2vZ6Qysgoquu5wjPoHkmn4gzq9cu00uBALHdA0"
      >
        <button className="btn btn-danger">Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
