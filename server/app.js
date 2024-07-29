import express from "express"
import dotenv from "dotenv"
import cors from "cors"

// setting up the env to use it 
dotenv.config({path:"./.env"})

const app = express()

// to enable cross connection between server and client 
// app.use(cors())

app.get("/product", (req, res, cb) => {
    res.send({msg: 'This is CORS-enabled for all origins!'})
})




// we can get the http requests and response values 
app.use(express.urlencoded({extended:true}));



app.listen(process.env.PORT,console.log(`Server is running on port ${process.env.PORT}`))