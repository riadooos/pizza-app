import axios from "axios";
import {
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_FAILED,
  ADD_PIZZAS_REQUEST,
  ADD_PIZZAS_SUCCESS,
  ADD_PIZZAS_FAILED,
  GET_PIZZABYID_REQUEST,
  GET_PIZZABYID_SUCCESS,
  GET_PIZZABYID_FAILED,
  UPDATE_PIZZA_REQUEST,
  UPDATE_PIZZA_SUCCESS,
  UPDATE_PIZZA_FAILED,
} from "../constants";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: GET_PIZZAS_REQUEST });
  try {
    const response = await axios.get("/api/pizzas");
    console.log(response);
    dispatch({ type: GET_PIZZAS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PIZZAS_FAILED, payload: error });
  }
};

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: GET_PIZZABYID_REQUEST });
  try {
    const response = await axios.post("/api/pizzas/getPizzaById", { pizzaId });
    console.log(response);
    dispatch({ type: GET_PIZZABYID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PIZZABYID_FAILED, payload: error });
  }
};

export const filterPizzas = (searchKey, category) => async (dispatch) => {
  var filterPizzas;
  dispatch({ type: GET_PIZZAS_REQUEST });
  try {
    const response = await axios.get("/api/pizzas");
    filterPizzas = response.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchKey)
    );
    if (category !== "all") {
      filterPizzas = response.data.filter(
        (pizza) => pizza.category.toLowerCase() === category
      );
    }
    dispatch({ type: GET_PIZZAS_SUCCESS, payload: filterPizzas });
  } catch (error) {
    dispatch({ type: GET_PIZZAS_FAILED, payload: error });
  }
};

export const addNewPizza = (pizza) => async (dispatch) => {
  dispatch({ type: ADD_PIZZAS_REQUEST });
  try {
    const response = await axios.post(
      "http://localhost:5500/api/pizzas/add-pizza",
      { pizza }
    );
    console.log(response);
    dispatch({ type: ADD_PIZZAS_SUCCESS });
  } catch (error) {
    dispatch({ type: ADD_PIZZAS_FAILED, payload: error });
  }
};

export const updatePizza = (updatedPizza) => async (dispatch) => {
  dispatch({ type: UPDATE_PIZZA_REQUEST });
  try {
    const response = await axios.post(
      "http://localhost:5500/api/pizzas/update-pizza",
      { updatedPizza }
    );
    console.log(response);
    dispatch({ type: UPDATE_PIZZA_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_PIZZA_FAILED, payload: error });
  }
};
