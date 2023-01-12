import * as dotenv from "dotenv"
import express from "express"
import mongoose, {connect} from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"
import {userRouter} from "./endpoints/userEndpoints";
dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api", userRouter)
mongoose.set('strictQuery', false)

const port = process.env.PORT_BACKEND || 8080

app.get('/', function (req, res) {
    res.send('Hello World')
})

const start = async () => {
    try {
        await connect(process.env.DB_URL || "")
        app.listen(port, () => console.log(`server start on ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start()


