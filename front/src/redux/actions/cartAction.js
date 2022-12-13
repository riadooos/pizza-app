import { ADD_TO_CART, DELETE_FROM_CART } from "../constants";

export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  let cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: Number(quantity),
    prices: pizza.prices, // c les different prix de la pizza pour les utilisé ailleurs
    price: pizza.prices[0][varient] * quantity, // c le prix calculer de la commande générales
  };

  if (cartItem.quantity > 10 || cartItem.quantity < 1) {
    alert("you can not add more ten or less than one");
  } else {
    dispatch({ type: ADD_TO_CART, payload: cartItem });
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: DELETE_FROM_CART, payload: pizza });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
