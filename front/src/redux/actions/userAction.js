import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from "../constants";

export const userAction = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const response = await axios.post("/api/users/register", user);
    console.log(response);
    dispatch({ type: USER_REGISTER_SUCCESS });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAILED, payload: error });
  }
};

export const loginAction = (user) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const response = await axios.post("/api/users/login", user);
    console.log(response);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILED, payload: error });
  }
};

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/";
};
