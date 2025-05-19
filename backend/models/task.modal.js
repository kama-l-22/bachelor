import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    to: { type: String, required: true },
    completed_by: { type: String },
    priority: { type: String, required: true },
    date_to_complete: { type: Date, required: true },
    status: { type: String, required: true },
    completed_date: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
