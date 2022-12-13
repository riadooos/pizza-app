import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const pizzaSchema = new Schema(
  {
    name: { type: String, require },
    varients: [],
    prices: [],
    category: { type: String, require },
    image: { type: String, require },
    description: { type: String, require },
  },
  { timestamps: true }
);
