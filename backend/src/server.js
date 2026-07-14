import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.use(express.json());  //middleware will parse json bodeis,will allow us to get req.body
app.use(rateLimiter);  //middleware will limit the number of requests to the server from a particular user in a given time frame

// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & req URL is ${req.url}`);
//     next();
// });  //middleware acts between request and respose it console.logs the text white the get method is called

app.use("/api/notes", notesRoutes);

//route
// app.get("/api/notes",(req,res)=>{
//     res.status(200).send("You got 1000 notes");  // If you get a particular request from the specific endpoint then it will respond 
//     //                                            back with the particular reply (created very first api)
// });

// app.post("/api/notes",(req,res)=>{
//     res.status(201).json({message:"note created successfully"});
// });

// //the id is given so that it knows which particular post to delete.
// //fetches the id of the post
// //eg: https://localhost:5001/api/notes/217564

// app.put("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"note updated successfully"});
// });

// app.delete("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"note deleted successfully"});
// });

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Listening on port: ", PORT);
    });
});