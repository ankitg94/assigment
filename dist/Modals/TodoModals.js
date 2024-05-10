import mongoose from "mongoose";
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter title"]
    },
    description: {
        type: String,
        required: [true, "Please Enter description"]
    }
}, { timestamps: true });
export const Todo = mongoose.model("Todo", schema);
