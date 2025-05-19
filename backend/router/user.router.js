import { Router } from "express";
import User from "../models/user.model.js";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

userRouter.post("/", async (req, res) => {
  const { name, email, phone, age, occupation, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newUser = new User({
      name,
      email,
      phone,
      age,
      occupation,
      password,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, age, occupation, password } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, phone, age, occupation, password: password },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default userRouter;
