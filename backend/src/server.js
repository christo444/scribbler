import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.use(express.json());  //middleware will parse json bodeis,will allow us to get req.body

// CORS MUST come before rateLimiter so 429s get CORS headers
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(rateLimiter);  //middleware will limit the number of requests to the server

app.use("/api/notes", notesRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Global error handler:", err);
    res.status(500).json({ message: "Internal server error" });
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Listening on port: ", PORT);
    });
}); 