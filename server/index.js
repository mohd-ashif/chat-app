import express from "express";
import bodyParser from "body-parser";
import cors from "cors" ;
import dotenv, { config } from "dotenv";
import helemt from "helmet";
import morgan from "morgan";
import { Configuration , OpenAIApi} from "openai"
import openAiRoutes from "./routes/openai.js"

// CONFIGURATIONS
dotenv.config()
const app = express()
app.use(express.json())
app.use(helemt())
app.use(helemt.crossOriginResourcePolicy({policy : "cross-origin"})) ;
app.use(morgan("common"))
app.use(bodyParser.json({limit: "30mb ", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}))
app.use(cors())

//OPEN AI CONFIG
const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY
})

export const openai = new OpenAIApi(configuration)

// SERVER SETUP

app.get('/', (req, res)=> {
    res.send("server is running ...")
})

//ROUTES
app.use('/openai', openAiRoutes) 

const port = process.env.PORT || 5000 ;

app.listen(port , ()=> {
    console.log(`App listening at http://localhost:${port}`)
})