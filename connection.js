import mongoose from "mongoose";
let connection = null;
export const connectToDatabase = async () => {
  if (!connection) {
    const mongoUri = "mongodb+srv://pachourisuhani:77gQ5SQtQ9m7ON4r@cluster0.5aieban.mongodb.net/";
    try {
      connection = await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected");
    } catch (error) {
      console.error("error", error);
      throw error;
    }
  }
  return connection;
};
