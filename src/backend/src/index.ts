import * as dotenv from "dotenv"
import express from "express"
dotenv.config()
const app = express()

const port = process.env.PORT_BACKEND || 8080

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(port)