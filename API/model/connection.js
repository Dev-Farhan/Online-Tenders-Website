import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/user_collections";
mongoose.connect(url);
console.log("Successfully Connect to Mongodb Database");