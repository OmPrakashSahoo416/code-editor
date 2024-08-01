import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import http from "http"
import {Server} from "socket.io"

// hit any http request with /api/.. routed you will hit the server side codes and database access and requests 

// setting up the env to use it 
dotenv.config({path:"./.env"})

const app = express()
// creating a http server since socket is not compatible with express 
const server = http.createServer(app)
const io = new Server(server);

io.on("connected", (socket) => {
    console.log("user connected")
})



// to enable cross connection between server and client 
app.use(cors())


// we can get the http requests and response values 
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res, cb) => {
    res.send("Server route")
})


// home route just for testing purposes
// app.get("/api/protected", (req, res, cb) => {
//     res.send("Hello from the server");
// })


// authenticating the user from front end and verifying here to access the protected route 
// app.get("/protected", ClerkExpressRequireAuth(), (req, res, cb) => {
    
// })



app.listen(process.env.PORT,console.log(`Server is running on port ${process.env.PORT}`))