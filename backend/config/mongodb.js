import mongoose from "mongoose";

const connnecDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database connected"));

  await mongoose.connect(`${process.env.MONGODB_URI}/prescriptowebapp`);
};

export default connnecDB;
