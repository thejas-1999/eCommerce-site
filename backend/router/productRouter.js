import express from "express";
import { protect, admin } from "../midleware/authMiddleware.js";
import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
} from "../controller/productController.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById).put(protect, admin, updateProduct);

export default router;
