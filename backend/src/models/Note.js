import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    {timestamps: true}   //automatically gets the timestamp
);

//first create  schema sructure  and then create model

const Note = mongoose.model("Note",noteSchema);

export default Note;