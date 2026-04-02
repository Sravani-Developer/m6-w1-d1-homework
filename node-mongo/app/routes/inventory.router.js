module.exports = (app) => {
  const inventories = require("../controllers/inventory.controller");
  const router = require("express").Router();

  router.post("/inventory", inventories.createInventory);
  router.get("/inventory/:id", inventories.getInventory);
  router.get("/inventories", inventories.inventories);
  router.put("/inventory", inventories.updateInventory);
  router.delete("/inventory/:id", inventories.deleteInventory);

  app.use("/api", router);
};
