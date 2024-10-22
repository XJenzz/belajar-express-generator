const mongoose = require("mongoose");
const {Key, DB} = require("../../api_key");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://${Key}@cluster0-shard-00-00.qeqfs.mongodb.net:27017,cluster0-shard-00-01.qeqfs.mongodb.net:27017,cluster0-shard-00-02.qeqfs.mongodb.net:27017/${DB}?ssl=true&replicaSet=atlas-wwygfo-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("MonggoDB connect");
  } catch (e) {
    console.error("MonggoDB connection error: ", e);
    process.exit(1);
  }
};

module.exports = connectDB;
