const express = require("express");

const {
    getProducts,
    getProductById
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getProducts);

router.get("/:id", authMiddleware, getProductById);

module.exports = router;