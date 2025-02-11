import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

// SEMUA ROUTER INI MASUK KE CONTROLLER BIAR LEBIH RAPIH
const router = express.Router();

// GET
router.get("/", getProducts);

// CREATE OR ADD
router.post("/", createProduct);

// UPDATE
router.put("/:id", updateProduct);

// DELETE
router.delete("/:id", deleteProduct);

export default router;
