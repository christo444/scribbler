//.........................
// export const getAllNotes = (req,res)=>{
//     res.status(200).send("Heyy mahnn you got all your notes , happyyy");
// };
//.........................

export async function getAllNotes(req,res){
    res.status(200).send("Heyy mahnn you got all your notes , happyyy");
}

export async function createNote(req,res){
    res.status(201).json({message:"note created successfully"});
}

export async function updateNote(req,res){   
    res.status(200).json({message:"note updated successfully"});
}

export async function deleteNote(req,res){
    res.status(200).json({message:"note deleted successfully"});
}