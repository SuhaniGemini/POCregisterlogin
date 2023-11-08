import UserModel from "./usermodel";
import { connectToDatabase } from "./connection";

export const registerUser = async (event) => {
  try {
    await connectToDatabase();
    const { email, password } = JSON.parse(event.body);
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Email already registered. Please login." }),
      };
    }
    const newUser = new UserModel({ email, password });
    const saved = await newUser.save();
    return {
      statusCode: 200,
      body: JSON.stringify(saved),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};


