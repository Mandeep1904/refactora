import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import aiRouter from './src/routes/ai.routes.js';

dotenv.config();
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const port = process.env.PORT || 3000;


app.get("/", (req, res)=>{
    res.send("Hey there, Howdy!")
})

app.use('/ai', aiRouter);

app.listen(port, (req, res) => {
    console.log(`🌼 Server is running on port : ${port}`);
})