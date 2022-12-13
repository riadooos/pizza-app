import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const orderSchema = new Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    userId: { type: String, require },
    orderItems: [],
    shippingAddress: { type: Object },
    orderAmount: { type: Number, require },
    isDelivered: { type: Boolean, require, default: false },
    transactionId: { type: String, require },
  },
  { timestamps: true }
);
