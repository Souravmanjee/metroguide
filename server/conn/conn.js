// const db=require ('mongoose')
// const connection = "mongodb+srv://hunterbaaba:Sourhub@metroguide.rj7cz.mongodb.net/?retryWrites=true&w=majority&appName=Metroguide"

// db.connect(connection,{}).then(callbck).catch(errorfun);
// function errorfun(error){
//     console.log(error);
// }
// function callbck(){
//     console.log("mongoDB connected")
// }

require('dotenv').config(); // Load environment variables from .env
const mongoose = require('mongoose');

// Get Mongo URI from environment
const connection = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
})
.catch((error) => {
  console.error("❌ MongoDB connection error:", error);
});
