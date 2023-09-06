import mongoose from "mongoose";

const dbConfig = {
  url: "mongodb://mongodb:27017/",
  options: {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

const initDB = async () => {
  try {
    await mongoose.connect(dbConfig.url, dbConfig.options);
    console.log("Connection to DB successful!");
  } catch (error) {
    console.log(error);
  }
};

export default initDB;
