import { getUserOrders, postOrder } from "../controllers/orderController";

const orderRoute = (app) => {
  app.route("/api/orders/placeorder").post(postOrder);
  app.route("/api/orders/getUserOrders").post(getUserOrders);
};

export default orderRoute;
