import express from "express";
import mongoose from "mongoose";

const app = express();


const connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@anas.0be97.mongodb.net/user-details?retryWrites=true&w=majority`;
  try {
   await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
   console.log(`Connection to database is established`)

  } catch (error) {
    console.log(`Connection to Database is failed : ${error}`);
  }
};
export default connection;
