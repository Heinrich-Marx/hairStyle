import express from "express"
import mongoose, {connect} from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"
import {userRouter} from "./user/endpoints/userEndpoints";
import * as dotenv from "dotenv"
import {errorMiddleware} from "./user/middelwares/error";
dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api", userRouter)
app.use(errorMiddleware)
mongoose.set('strictQuery', false)

const port = process.env.PORT_BACKEND

app.get('/', function (req, res) {
    res.send('Hello World')
})


const start = async () => {
    try {
        // TODO fix env types
        const url = process.env.DB_URL
        if (url) {
            await connect(url)
            app.listen(port, () => console.log(`server start on ${port}`))
        }
    } catch (e) {
        console.log(e)
    }
}

start()


