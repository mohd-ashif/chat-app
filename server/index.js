import express from "express";
import bodyParser from "body-parser";
import cors from "cors" ;
import dotenv, { config } from "dotenv";
import helemt from "helmet";
import morgan from "morgan";

dotenv.config()

// CONFIGURATIONS

const app = express()
app.use(express.json())
app.use(helemt())
app.use(helemt.crossOriginResourcePolicy({policy : "cross-origin"})) ;
app.use(morgan("common"))
app.use(bodyParser.json({limit: "30mb ", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}))
app.use(cors())

// SERVER SETUP

app.get('/', (req, res)=> {
    res.send("server is running ...")
})

const port = process.env.PORT || 5000 ;

app.listen(port , ()=> {
    console.log(`App listening at http://localhost:${port}`)
})