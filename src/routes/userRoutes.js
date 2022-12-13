import { login, registerUser } from "../controllers/userController";

const userRoutes = (app) => {
  app.route("/api/users/login").post(login);
  app.route("/api/users/register").post(registerUser);
};

export default userRoutes;
