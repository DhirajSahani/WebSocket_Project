
import mongoose from "mongoose";
import { envConfig } from "./config";

async function connectTodb(){
    try {
        mongoose.connection.on("connected",()=>{
            console.log("Database Conneted done!")
        })
        await mongoose.connect(envConfig.mongoConectonString as string)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
        
    }
}

export default connectTodb