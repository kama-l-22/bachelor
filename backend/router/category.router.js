import Category from "../models/category.model.js";

import { Router } from "express";

const categoryRouter = Router();

categoryRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

categoryRouter.post("/", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const category = new Category({
      name,
    });
    await category.save();
    res.status(201).json({ message: "Added", category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

categoryRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

export default categoryRouter;
