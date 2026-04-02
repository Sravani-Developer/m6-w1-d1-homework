const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    prodname: {
      type: String,
      required: true,
      trim: true,
    },
    qty: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: "inventories",
  }
);

module.exports = mongoose.model("Inventory", inventorySchema);
