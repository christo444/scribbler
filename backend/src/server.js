import express from "express";
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("/api/notes",notesRoutes);

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

app.listen(5001,()=>{
    console.log("Listening on port 5001");
}); 

// mongodb+srv://scribbler_db_user:aYU4rPXFIicnovLr@cluster0.butm3im.mongodb.net/?appName=Cluster0