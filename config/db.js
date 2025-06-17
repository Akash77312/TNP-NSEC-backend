import mongoose from "mongoose";

export const connectDb =()=>{
  mongoose
  .connect(
    'mongodb+srv://akashsingh77312:12345@tnp-project.irlc3j1.mongodb.net/?retryWrites=true&w=majority&appName=tnp-project',
    {
      dbName: "Placement",
    }
  )
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));
}