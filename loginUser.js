import UserModel from "./usermodel";
import { connectToDatabase } from "./connection";
export const loginUser = async (event) => {
  try {
    await connectToDatabase();
    const { email, password } = JSON.parse(event.body);
    const existingUser = await UserModel.findOne({ email, password });

    if (!existingUser) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Invalid email or password. Please register first." }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Login successful." }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
