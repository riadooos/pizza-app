import mongoose from "mongoose";
import { pizzaSchema } from "../models/pizzaModel";

const Pizza = mongoose.model("Pizza", pizzaSchema);

export const testPizza = async (req, res) => {
  res.send("test of pizza");
};

export const getPizzas = async (req, res) => {
  await Pizza.find({})
    .sort({ createdAt: -1 })
    .exec()
    .then((pizzas) => {
      if (!pizzas) return res.status(500).json({ message: "No Pizzas!!!" });
      else return res.status(200).json(pizzas);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};

export const addNewPizza = async (req, res) => {
  const pizza = req.body.pizza;
  try {
    const newPizza = new Pizza({
      name: pizza.name,
      image: pizza.image,
      varients: ["small", "medium", "large"],
      description: pizza.description,
      category: pizza.category,
      prices: [pizza.prices],
    });
    await newPizza.save();
    res.send("new Pizza Added Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const getOnePizza = async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    const pizza = await Pizza.findOne({ _id: pizzaId });
    res.send(pizza);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const updatePizza = async (req, res) => {
  const updatePizza = req.body.updatedPizza;
  try {
    const pizza = await Pizza.findOne({ _id: updatePizza._id });
    (pizza.name = updatePizza.name),
      (pizza.description = updatePizza.description),
      (pizza.image = updatePizza.image);
    pizza.category = updatePizza.category;
    pizza.prices = [updatePizza.prices];

    await pizza.save();
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
