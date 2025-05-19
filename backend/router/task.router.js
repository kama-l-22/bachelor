import Task from "../models/task.modal.js";
import { Router } from "express";

const taskRouter = Router();

taskRouter.get("/pending", async (req, res) => {
  try {
    const tasks = await Task.find({ status: "pending" });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

taskRouter.get("/completed", async (req, res) => {
  try {
    const tasks = await Task.find({ status: "completed" });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

taskRouter.post("", async (req, res) => {
  const { title, description, to, priority, date_to_complete } = req.body;
  if (!title || !description || !to || !priority || !date_to_complete) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const task = await Task.create({
      title,
      description,
      to,
      priority,
      date_to_complete,
      status: "pending",
    });
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

taskRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

taskRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, to, priority, date_to_complete } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, to, priority, date_to_complete },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

taskRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
taskRouter.patch("/:id/complete", async (req, res) => {
  const { id } = req.params;
  const { completed_by } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      id,
      {
        status: "completed",
        completed_date: new Date(),
        completed_by: completed_by,
      },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

taskRouter.get("/pending/filter", async (req, res) => {
  const { from, to, searchString } = req.query;
  let filter = { status: "pending" };

  if (from || to) {
    filter.date_to_complete = {};
    if (from) filter.date_to_complete.$gte = new Date(from);
    if (to) filter.date_to_complete.$lte = new Date(to);
  }

  if (searchString) {
    filter.to = { title: searchString };
  }
  try {
    const tasks = await Task.find(filter);
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

taskRouter.get("/completed/filter", async (req, res) => {
  const { from, to, searchString } = req.query;
  let filter = { status: "completed" };

  if (from || to) {
    filter.completed_date = {};
    if (from) filter.completed_date.$gte = new Date(from);
    if (to) filter.completed_date.$lte = new Date(to);
  }

  if (searchString) {
    filter.title = { $regex: searchString, $options: "i" };
  }
  try {
    const tasks = await Task.find(filter);
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default taskRouter;
