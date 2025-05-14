
import mongoose from "mongoose";
import { ITodo, status } from "./todoTypes";
const Schema = mongoose.Schema

const todoSchema = new Schema<ITodo>({
   task:String,
   deadline:String,
   status:{
    type:String,
    enum:[status.Completed,status.Pending],
    default:status.Pending
   }
})

export default mongoose.model("Todo",todoSchema)