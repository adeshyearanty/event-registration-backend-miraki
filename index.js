import express from "express"
import cors from "cors"
import userRouter from "./routes/user-route.js"
import { createDbConn } from "./db/db-conn.js"
import { PORT } from "./config/config.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(userRouter);
app.use('/Static', express.static('Static'));

async function startServer(){
    await createDbConn();
    app.listen(PORT, ()=>console.log(`Server is running on PORT : ${PORT}`))
}
startServer();
