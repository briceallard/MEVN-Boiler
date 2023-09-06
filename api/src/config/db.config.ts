import mongoose from "mongoose";

// Configuration object for the database
const dbConfig = {
  url: process.env.MONGODB_URI || "mongodb://mongodb:27017/", // MongoDB connection URL
  options: {
    autoIndex: true, // Enable automatic indexing
    useNewUrlParser: true, // Use new URL parser
    useUnifiedTopology: true, // Use new server discovery and monitoring engine
  },
};

// Function to initialize the database connection
const initDB = async () => {
  try {
    await mongoose.connect(dbConfig.url, dbConfig.options); // Connect to the database
    console.log("Connection to DB successful!"); // Log a success message
  } catch (error) {
    console.log(error); // Log any errors that occur during connection
  }
};

export default initDB; // Export the initDB function
