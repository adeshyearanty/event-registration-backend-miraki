import dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = process.env.mongoDBUrl
const PORT = process.env.PORT

export {
  MONGODB_URL,
  PORT
};
