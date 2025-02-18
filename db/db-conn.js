import mongoose from "mongoose";
import { MONGODB_URL } from "../config/config.js";

export function createDbConn() {
  return mongoose.connect(MONGODB_URL);
}
