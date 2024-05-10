import {Request, Response} from "express";
import  { Todo } from "../Modals/TodoModals.js";

//create todo 

export const CreateToDoController = async(
    req:Request<{},{},{title:string;description:string}>,
    res:Response,   
 )=>{
 
    try{
        
        const {title,description} =req.body;
      
        console.log(title,description)

        if(!title||!description){
            return res.status(401).json({
                success:false,
                message:"Please fill all the feilds"
            })
        }
       const todo= await Todo.create({title,description})
        return   res.status(200).json({
            success:true,
            message:"Todo Created Succesfully",
            todo
        })
       } catch(error){
        return  res.status(500).send({
        success:false,
        message:error
        })
}
}
//1-all todo 
export const alltodoController =async(
    req:Request,
    res:Response,
)=>{
    try{
        const alltodo= await Todo.find({})
        return    res.status(200).json({
                  success:true,
                  message:"Todo Created Succesfully",
                  total:alltodo.length,
                  alltodo
        })

    }
    catch(error){
            return  res.status(500).send({
            success:false,
            message:error
            })
    }
}

//2-- get single todo
export const singleTodoController=async(
    req:Request,
    res:Response,
)=>{
    try{
    const getsingle =await Todo.findById(req.params.id)
    return   res.status(200).json({
        success:true,
        message:"Todo Created Succesfully",
        getsingle 
     })
      }catch(error){
        return  res.status(500).send({
        success:false,
        message:error
        })
}
}


//-3-edit todo  
export const editTodoController =async(
    req:Request<{},{},{title:string;description:string}>,
    res:Response,
)=>{
  try{
      const id =req.params.id;
      
      const {title,description} =req.body;
      

    const Todos = await Todo.findById(id)
   
    if(!Todos){
        return res.status(400).json({
            success:false,
            message:"Id not found",
        })
    }
   
    if (title) Todos.title =title;
    console.log("hel")
    if(description) Todos.description=description;

     await Todos.save()

     return res.status(200).json({
        success:true,
        messaage:"Todo updated succesfully",
        Todos
     })


  }catch(error){
    return  res.status(500).send({
        success:false,
        message:error
        })


  }


}
//4 -- delete todo
export const deleteTodoController=async(
    req:Request,
    res:Response,
)=>{
    try{
    const id =req.params.id;
    const Todos = await Todo.findById(id)
    if(!Todos){
        return res.status(400).json({
            success:false,
            message:"Id not found",

        })
    }
    await Todos.deleteOne()
     return   res.status(200).json({
        success:true,
        message:"Todo deleted Succesfully",
        
     })

    }catch(error){
        return  res.status(500).send({
            success:false,
            message:error
            })

    }

}