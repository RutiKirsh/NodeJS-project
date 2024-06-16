import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv()

mongoose.set("strictQuery", false);

export default async function connect(){
    try{
        await mongoose.connect(prosses.env.CONN_STRING)
    }
    catch(err){
        console.log(err);
    }

}
