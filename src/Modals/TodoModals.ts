import mongoose from "mongoose";
interface ITodo extends Document {
 title:string;
 description:string;

}
const schema =new mongoose.Schema(
    {
      title:{
        type:String,
        required:[true,"Please Enter title"]
      },
      description:{
        type:String,
        required:[true,"Please Enter description"]
      }  

    },{timestamps:true})

export const Todo = mongoose.model<ITodo>("Todo",schema)    