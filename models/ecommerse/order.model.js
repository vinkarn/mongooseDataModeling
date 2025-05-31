import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
  product: {
    //will pick productId from the product schema
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    //the quantity will be specified in here for that particular product
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: [orderItemSchema], //this is array of orderItemsSchema. A single item can have different quantity then other item, so we have created a differnt sub-schema that we will pass as array inthis.
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "PLACED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
