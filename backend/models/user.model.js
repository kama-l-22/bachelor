import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: { required: true, type: String, unique: true },
    password: { type: String, required: true },
    fullName: { type: String },
    email: { required: true, type: String },
    phone: { required: true, type: Number },
    age: { type: Date },
    occupation: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
