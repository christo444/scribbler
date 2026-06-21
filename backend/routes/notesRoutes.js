import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("Heyy mahnn you got all your notes , happyyy");  // If you get a particular request from the specific endpoint then it will respond 
    //                                            back with the particular reply (created very first api)
});

router.post("/",(req,res)=>{
    res.status(201).json({message:"note created successfully"});
});

router.put("/:id",(req,res)=>{      // after / you can give the remaining endpoint routes
    res.status(200).json({message:"note updated successfully"});
});

router.delete("/:id",(req,res)=>{
    res.status(200).json({message:"note deleted successfully"});
});

export default router;