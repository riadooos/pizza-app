import mongoose from "mongoose";
import { orderSchema } from "../models/orderModel";
import { v4 as uuidv4 } from "uuid";

const stripe = require("stripe")(
  "sk_test_51M2MsaCrjwbYsMlFXjKi56rwH4pEgXVKYL7m7iuX5jifuydRq4rG8C5x2BAxO1zYpasJXQAQz2leriJCUq3VNJH700fYehAHF8"
);

const Order = mongoose.model("Order", orderSchema);

export const postOrder = async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "dzd",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },

        transactionId: payment.source.id,
      });

      await newOrder.save();
      res.send("Payment Done");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    return res.status(400).json("Something went wrong !!!");
  }
};

export const getUserOrders = async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await Order.find({ userId: userId }).sort({ _id: -1 });
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};
