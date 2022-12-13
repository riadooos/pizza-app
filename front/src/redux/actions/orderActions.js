import axios from "axios";
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILED,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILED,
} from "../constants";

export const placeOrderAction =
  (token, subtotal) => async (dispatch, getState) => {
    dispatch({ type: PLACE_ORDER_REQUEST });
    const currentUser = getState().loginReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try {
      const response = await axios.post(
        "http://localhost:5500/api/orders/placeorder",
        { token, subtotal, currentUser, cartItems }
      );
      dispatch({ type: PLACE_ORDER_SUCCESS });
      console.log(response);
    } catch (error) {
      dispatch({ type: PLACE_ORDER_FAILED });
      console.log(error);
    }
  };

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginReducer.currentUser;
  dispatch({ type: GET_ORDERS_REQUEST });
  try {
    const response = await axios.post(
      "http://localhost:5500/api/orders/getUserOrders",
      {
        userId: currentUser._id,
      }
    );
    console.log(response);
    dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ORDERS_FAILED, payload: error });
  }
};
