import express from "express";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is Working 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
