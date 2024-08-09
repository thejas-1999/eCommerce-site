import path from "path";
import express from "express";
import cors from "cors";
import productRoutes from "./router/productRouter.js";
import userRoutes from "./router/userRouter.js";
import orderRoutes from "./router/orderRouter.js";
import uploadRoutes from "./router/uploadRouter.js";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./midleware/errorMiddleware.js";
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true, // Allow credentials (cookies)
  })
);

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get(`/api/config/paypal`, (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

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
