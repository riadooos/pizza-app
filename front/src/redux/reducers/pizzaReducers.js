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
export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case GET_PIZZAS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_PIZZAS_SUCCESS:
      return {
        loading: false,
        pizzas: action.payload,
      };
    case GET_PIZZAS_FAILED:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getPizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PIZZABYID_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_PIZZABYID_SUCCESS:
      return {
        loading: false,
        pizza: action.payload,
      };
    case GET_PIZZABYID_FAILED:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PIZZAS_REQUEST:
      return { loading: true, ...state };
    case ADD_PIZZAS_SUCCESS:
      return { loading: false, success: true };
    case ADD_PIZZAS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updatePizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PIZZA_REQUEST:
      return { updateLoading: true, ...state };
    case UPDATE_PIZZA_SUCCESS:
      return { updateLoading: false, updateSuccess: true };
    case UPDATE_PIZZA_FAILED:
      return { updateLoading: false, updateError: action.payload };
    default:
      return state;
  }
};
