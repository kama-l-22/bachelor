import mongoose from "mongoose";

const dbConnect = () => {
  mongoose.connect("mongodb://localhost:27017/bachlore");
  const database = mongoose.connection;
  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
};

export default dbConnect;
