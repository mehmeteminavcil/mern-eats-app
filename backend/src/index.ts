import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
//imported routes
import myUserRoute from "./routes/MyUserRoute";
import myRestaurantRoute from "./routes/MyRestaurantRoute";
import restaurantRoute from "./routes/RestaurantRoute";

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

// CLOUDINARY CONNECTION
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());

app.use(cors());

// routes
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/my/user", myUserRoute);
app.use("/api/restaurant", restaurantRoute);

// health route
app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server started on localhost", PORT);
});
