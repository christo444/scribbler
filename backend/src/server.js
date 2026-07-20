import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve();

app.use(express.json());  //middleware will parse json bodeis,will allow us to get req.body

// CORS MUST come before rateLimiter so 429s get CORS headers
if (process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: "http://localhost:5173"
    }));
}

app.use(rateLimiter);  //middleware will limit the number of requests to the server

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {

    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

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