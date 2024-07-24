import express from "express";
import cors from "cors";
import productRoutes from "./router/productRouter.js";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./midleware/errorMiddleware.js";
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB(); // Wait for the DB connection to be established
    console.log(`MongoDB Connected`);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit process with failure
  }
};

startServer();
