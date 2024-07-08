const mongoose = require('mongoose');

const MONGODB_URL = "mongodb+srv://ashwanijha04:Ashwani%40911@cluster0.1affu4j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
