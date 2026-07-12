import Note from "../models/Note.js";
//.........................
// export const getAllNotes = (req,res)=>{
//     res.status(200).send("Heyy mahnn you got all your notes , happyyy");
// };
//.........................

export async function getAllNotes(req,res){
    // res.status(200).send("Heyy mahnn you got all your notes , happyyy");
    try {
        const notes = await Note.find();  //gets all the notes from the dtabase 
        res.status(200).json(notes);
    } catch (error) {
        console.error("error in getallnotes method",error);
        res.status(500).json({message:"Internal server error"});;
    }
}

export async function createNote(req,res){
    // res.status(201).json({message:"note created successfully"});
    try {
        const {title,content} = req.body
        const newNote =  new Note({title,content})
    } catch (error) {
        
    }
}

export async function updateNote(req,res){   
    res.status(200).json({message:"note updated successfully"});
}

export async function deleteNote(req,res){
    res.status(200).json({message:"note deleted successfully"});
}