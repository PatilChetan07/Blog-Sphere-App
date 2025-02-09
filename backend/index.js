import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";

import cors from "cors";
const app = express();
dotenv.config();

const connectDB = async () => {
    const uri = process.env.MONGO_URI;    
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas', error);
        process.exit(1);
    }
};

connectDB();

/// DB Code
// try {
//   mongoose.connect(MONOGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//   });
//   console.log("Connected to mongoDB");
// } catch (error) {
//   console.log("Error: ", error);
// }  

const port = process.env.PORT;
// const MONOGO_URL = process.env.MONOG_URI;

//middleware
app.use(express.json());
app.use(cookieParser());
// ( CORS : Cross-Origin Resource Sharing ) : Allows the frontend to make requests to the backend 
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);


// defining routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);
// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
