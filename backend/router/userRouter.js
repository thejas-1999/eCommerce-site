import express from "express";
import {
  authUser,
  registerUser,
  logoutUser, // Corrected the typo
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser); // Corrected the typo
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

export default router;
