import Photo from "../models/photo.model.js";

import express from "express";
import multer from "multer";
import fs from "fs";

const photoRouter = express.Router();

// Ensure uploads directory exists
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

photoRouter.post("/", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  if (!req.body.title || !req.body.description || !req.body.memmory) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    const { title, description, memmory } = req.body;
    const image = req.file.path;

    const newPhoto = new Photo({
      title,
      description,
      image,
      memmory,
    });

    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error uploading photo" });
  }
});

photoRouter.get("/", async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json(photos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching photos" });
  }
});

photoRouter.get("/:id", async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) {
      return res.status(404).json({ message: "Photo not found" });
    }
    res.status(200).json(photo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching photo" });
  }
});

photoRouter.delete("/:id", async (req, res) => {
  try {
    const photo = await Photo.findByIdAndDelete(req.params.id);
    if (!photo) {
      return res.status(404).json({ message: "Photo not found" });
    }
    res.status(200).json({ message: "Photo deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting photo" });
  }
});

photoRouter.get("/memory/:memmory", async (req, res) => {
  try {
    const photos = await Photo.find({ memmory: req.params.memmory });
    if (!photos) {
      return res
        .status(404)
        .json({ message: "No photos found for this memory" });
    }
    res.status(200).json(photos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching photos" });
  }
});

photoRouter.get("/search", async (req, res) => {
  const { title, description, memmory } = req.query;

  try {
    const query = {};
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }
    if (description) {
      query.description = { $regex: description, $options: "i" };
    }
    if (memmory) {
      query.memmory = { $regex: memmory, $options: "i" };
    }

    const photos = await Photo.find(query);
    res.status(200).json(photos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error searching photos" });
  }
});
photoRouter.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { memmory } = req.body;

    const updatedPhoto = await Photo.findByIdAndUpdate(req.params.id, {
      memmory,
    });

    res.status(200).json(updatedPhoto);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating photo" });
  }
});

export default photoRouter;
