import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("You got 1000 notes");  // If you get a particular request from the specific endpoint then it will respond 
    //                                            back with the particular reply (created very first api)
});

router.post("/",(req,res)=>{
    res.status(201).json({message:"note created successfully"});
});

router.put("/",(req,res)=>{
    res.status(200).json({message:"note updated successfully"});
});

router.delete("/",(req,res)=>{
    res.status(200).json({message:"note deleted successfully"});
});