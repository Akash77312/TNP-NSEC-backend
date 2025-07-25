import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import userRoutes from "./routes/userRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import mcqRoutes from "./routes/mcqRoutes.js";
import recruiterJAF from "./routes/recruiterJAFRoutes.js";
import discussionRoutes from "./routes/discussionRoutes.js";
import { isAuthenticate } from "./middlewares/auth.js";
import PGraphRoutes from "./routes/PGraphRoutes.js";

const app = express();

dotenv.config();
connectDb();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.FRONTEND_VERCEL_URL], // Frontend origin
    credentials: true,
  })
);

// app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/u", userRoutes);
app.use("/api/v1/u/profile", profileRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/recruiter", recruiterJAF);
app.use("/api/v1", mcqRoutes);
app.use("/api/v1", discussionRoutes);
app.use("/api/v1/admin", PGraphRoutes);

app.get("/protected", isAuthenticate, (req, res) => {
  res.send({
    success: true,
    message: "Access granted to protected route",
    user: req.user,
  });
});

app.use(errorMiddleware);
const PORT = process.env.PORT || 4000;
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
