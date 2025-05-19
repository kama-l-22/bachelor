import accountModal from "../models/account.modal.js";

import { Router } from "express";

const accountRouter = Router();

accountRouter.get("/", async (req, res) => {
  const { category, search, from, to } = req.query;
  const query = {};
  if (category) {
    query.category = category;
  }

  if (from && to) {
    query.date = {
      $gte: new Date(from),
      $lte: new Date(to),
    };
  }
  if (search) {
    query.$or = [{ name: { $regex: search, $options: "i" } }];
  }
  try {
    const accounts = await accountModal.find(query);
    res.status(200).json({ accounts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

accountRouter.post("/", async (req, res) => {
  const { price, name, description, date, category } = req.body;
  if (!price || !name || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const account = new accountModal({
      price,
      name,
      description,
      date,
      category,
    });
    await account.save();
    res.status(201).json({ message: "Added", account });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

accountRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const account = await accountModal.findById(id);
    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }
    res.status(200).json({ account });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

accountRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { price, name, description, date, category } = req.body;
  if (!price || !name || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const account = await accountModal.findByIdAndUpdate(
      id,
      { price, name, description, date, category },
      { new: true }
    );
    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }
    res.status(200).json({ message: "Updated", account });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

accountRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const account = await accountModal.findByIdAndDelete(id);
    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }
    res.status(200).json({ message: "Deleted", account });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default accountRouter;
