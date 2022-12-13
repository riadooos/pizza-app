import {
  addNewPizza,
  getOnePizza,
  getPizzas,
  testPizza,
  updatePizza,
} from "../controllers/pizzaController";

const pizzaRoute = (app) => {
  app.route("/").get(testPizza);
  app.route("/api/pizzas").get(getPizzas);
  app.route("/api/pizzas/add-pizza").post(addNewPizza);
  app.route("/api/pizzas/getPizzaById").post(getOnePizza);
  app.route("/api/pizzas/update-pizza").post(updatePizza);
};

export default pizzaRoute;
