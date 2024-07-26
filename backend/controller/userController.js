import asyncHandler from "../midleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc Auth user & get token
//@route POST /api/users/login
//@access public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

//@desc Register user
//@route POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

//@desc Log out user /clear cookie
//@route POST /api/users/logout
//@access private
const logoutrUser = asyncHandler(async (req, res) => {
  res.send("logoutr user");
});

//@desc Get user profile
//@route GET /api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

//@desc Update user profile
//@route PUT /api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

//@desc Get all users
//@route GET /api/users
//@access private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("Get users admin");
});

//@desc Get user by id
//@route GET /api/users/:id
//@access private/admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("Get one user by id");
});

//@desc Update user
//@route PUT /api/users/:id
//@access private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update User By Admin");
});

//@desc Delete user
//@route DELETE /api/users/:id
//@access private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete User By Admin");
});

export {
  authUser,
  registerUser,
  logoutrUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
