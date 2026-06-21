import express from "express";

const app = express();

app.get("/api/notes",(req,res)=>{
    res.send("You got 10 notes");  // If you get a particular request from the specific endpoint then it will respond
});                                // back with the particular reply (created very first api)

app.listen(5001,()=>{
    console.log("Listening on port 5001");
});