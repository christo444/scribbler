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
        res.status(500).json({message:"Internal server error"});
    }
}

export async function createNote(req,res){
    // res.status(201).json({message:"note created successfully"});
    try {
        const {title,content} = req.body
        const note =  new Note({title,content})

        const savedNote = await note.save();  //saves the new note in the database
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("error in createnote method",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function updateNote(req,res){   
    // res.status(200).json({message:"note updated successfully"});
    try {
        const {title,content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if (!updatedNote) return res.status(404).json({message:"Note not found"})
        res.status(200).json({message:"Note updated successfully"})
    } catch (error) {
        console.error("error in updatenote method",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function deleteNote(req,res){
    res.status(200).json({message:"note deleted successfully"});
}