import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import pizzaRoute from "./src/routes/pizzaRoute";
import userRoutes from "./src/routes/userRoutes";
import orderRoute from "./src/routes/orderRoute";
import path from "path";
const morgan = require("morgan");

dotenv.config();
const app = express();

const port = process.env.PORT || 5500;
const dbServ = process.env.DBSERV;
const db_url = process.env.DB_URL;
const atlas_url = process.env.ATLAS_URL;

//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connect dataBase
mongoose.Promise = global.Promise;
mongoose
  .connect(atlas_url, {
    useNewUrlParser: true,
  })
  .then(() => console.log(`la base locale tourne sur : ${dbServ}`))
  .catch((err) => console.log(err));

pizzaRoute(app);
userRoutes(app);
orderRoute(app);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("front/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front/build/index.html"));
  });
}

app.listen(port, () => console.log(`this server turn in port : ${port}`));

/* mongod --port 27017 --dbpath C:\TP\27-PizzaApp\dbPizza --logpath C:\TP\27-PizzaApp\dbPizza\mongod_27017.log */
