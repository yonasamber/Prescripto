import express from "express";
import cors from "cors";
import "dotenv/config";
import connnecDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import { addDoctor } from "./controllers/adminController.js";
//app config
const app = express();

const port = process.env.PORT || 3000;
connnecDB();
connectCloudinary();

//middlewares

app.use(express.json());
app.use(cors());

//api endpoints

app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API IS WORKING Great");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
