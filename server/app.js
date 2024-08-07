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

// to enable cors to avoid getting cross platform errors when connecting with the client side front end 
// replace after deployment
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173"
    }
});

// to enable cross connection between server and client 
app.use(cors())
app.use(cors({
    origin:"http://localhost:5173"
}))

let connectedClient = []

io.on("connection", (socket) => {
    console.log("User connected with id : " + socket.id) 
    
    socket.on("test" ,(data) => {
        console.log(data)
        // push the connected client to array 
        connectedClient.push(data);

        // update the list in clients with emiting the data to clients 
        io.emit("update", connectedClient)
        
    })

})

io.on("test", data => {
    console.log(data)
})






// we can get the http requests and response values 
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res, cb) => {
    res.send("Server route")
})






server.listen(process.env.PORT,console.log(`Server is running on port ${process.env.PORT}`))