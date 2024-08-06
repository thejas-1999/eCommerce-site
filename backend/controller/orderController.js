import asyncHandler from "../midleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@desc Create new order
//@route POST /api/orders
//@access private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send(`add order items`);
});

//@desc Get logged in users orders
//@route GET /api/orders/mine
//@access private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send(`get my orders`);
});

//@desc Get order by ID
//@route GET /api/orders/:id
//@access private/admin
const getOrderById = asyncHandler(async (req, res) => {
  res.send(`get order by id`);
});

//@desc UPDATE order to paid
//@route GET /api/orders/:id/pay
//@access private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send(`update order to paid`);
});

//@desc UPDATE order to delvered
//@route GET /api/orders/:id/deliver
//@access private/admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send(`update order to delivered`);
});

//@desc GET all orders
//@route GET /api/orders
//@access private/admin
const getOrders = asyncHandler(async (req, res) => {
  res.send(`get all orders`);
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
