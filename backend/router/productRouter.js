import express from "express";
import { protect, admin } from "../midleware/authMiddleware.js";
import {
  getProductById,
  getProducts,
  createProduct,
} from "../controller/productController.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById);

export default router;
