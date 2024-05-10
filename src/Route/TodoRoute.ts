import express from "express";
import { CreateToDoController, alltodoController, deleteTodoController, editTodoController, singleTodoController } from "../controllers/ToDoController.js";

const route =express.Router()
//create Todo
route.post("/createTodo",CreateToDoController)
 route.get("/all-todo",alltodoController)
 route.get("/single-todo/:id",singleTodoController)
 route.put("/edit-todo/:id",editTodoController)
 route.delete("/delete-todo/:id",deleteTodoController)


export default route;