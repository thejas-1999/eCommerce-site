import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/Products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/connectDB.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Clear existing data
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    // Insert sample users
    const createdUsers = await User.insertMany(users);

    // Get admin user id
    const adminUser = createdUsers[0]._id;

    // Insert sample products and associate them with the admin user
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported Successfully!");
    process.exit();
  } catch (error) {
    console.error("Error with data import:", error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    console.log("Data Destroyed Successfully!");
    process.exit();
  } catch (error) {
    console.error("Error with data destroy:", error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
