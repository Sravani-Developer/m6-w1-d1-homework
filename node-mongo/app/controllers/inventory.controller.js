const mongoose = require("mongoose");
const Inventory = require("../models/inventory.model");

exports.createInventory = async (req, res) => {
  try {
    const inventory = new Inventory({
      prodname: req.body.prodname,
      qty: req.body.qty,
      price: req.body.price,
      status: req.body.status,
    });

    const data = await inventory.save();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the inventory.",
    });
  }
};

exports.getInventory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid inventory id." });
    }

    const inventory = await Inventory.findById(id);

    if (!inventory) {
      return res.status(404).send({ message: "Inventory not found." });
    }

    res.status(200).send(inventory);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error retrieving inventory.",
    });
  }
};

exports.inventories = async (req, res) => {
  try {
    const inventories = await Inventory.find({});
    res.status(200).send(inventories);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error retrieving inventories.",
    });
  }
};

exports.deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid inventory id." });
    }

    const inventory = await Inventory.findByIdAndRemove(id);

    if (!inventory) {
      return res.status(404).send({ message: "Inventory not found." });
    }

    res.status(200).send({ message: "Inventory deleted successfully." });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error deleting inventory.",
    });
  }
};

exports.updateInventory = async (req, res) => {
  try {
    const { id, _id, ...updates } = req.body;
    const inventoryId = id || _id;

    if (!inventoryId || !mongoose.Types.ObjectId.isValid(inventoryId)) {
      return res.status(400).send({ message: "Invalid inventory id." });
    }

    const inventory = await Inventory.findById(inventoryId);

    if (!inventory) {
      return res.status(404).send({ message: "Inventory not found." });
    }

    inventory.prodname = updates.prodname ?? inventory.prodname;
    inventory.qty = updates.qty ?? inventory.qty;
    inventory.price = updates.price ?? inventory.price;
    inventory.status = updates.status ?? inventory.status;

    await inventory.save();

    res.status(200).send({ message: "Inventory updated successfully." });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error updating inventory.",
    });
  }
};
