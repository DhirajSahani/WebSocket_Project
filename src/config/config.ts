
import { config } from "dotenv";
config()

export const envConfig={
    port : process.env.PORT,
    mongoConectonString:process.env.MONGO_URI
    
}