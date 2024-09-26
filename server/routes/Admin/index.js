const express = require("express");

const router = express.Router();

const productRoutes = require("./product");
const shopRoutes = require("./shop");

router.use("/products", productRoutes);
router.use("/shop", shopRoutes);

module.exports = router;
