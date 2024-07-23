import express from "express";
import products from "./data/Products.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

mongoose.connect(mongoUri).then(() => {
  try {
    console.log(`Server is connected to mongoDB`);
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Connection error:", error);
  }
});
