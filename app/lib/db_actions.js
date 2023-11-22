import mongoose from "mongoose";

const url = process.env.MONGODB_URL;
export default async function connectDB(){
    try{
        await mongoose.connect(url);
        console.log('connected to mongodb')
    }catch(e){
        console.log('error mongodb',e);
    }
}