import express from "express"
import {config} from "dotenv"
import { connectDB } from "./utils/dt.js"
import TodoRoute from "./Route/TodoRoute.js"
config({
    path:"./.env"
})
const app =express()
//for converting json format
app.use(express.json()) 

let PORT=process.env.PORT
const URL=process.env.MONGO_URL ||"" ;
connectDB(URL);

app.use("/api/v1/Todo",TodoRoute)


app.listen(PORT,()=>{
    console.log(`server is running at the ${PORT}`)
})