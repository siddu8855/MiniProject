import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://psiddanagoud0:ggo5iG5CzgQE4oTz@cluster0.dsobn.mongodb.net/').then(()=>console.log("DB Connected"));
}





