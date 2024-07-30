import express from "express"
import dotenv from "dotenv"
import { ClerkExpressRequireAuth} from "@clerk/clerk-sdk-node";
import cors from "cors"

// setting up the env to use it 
dotenv.config({path:"./.env"})

const app = express()

// to enable cross connection between server and client 
app.use(cors())


// we can get the http requests and response values 
app.use(express.urlencoded({extended:true}));


// home route 
app.get("/api/protected", (req, res, cb) => {
    res.send("Hello from the server");
})


// authenticating the user from front end and verifying here to access the protected route 
// app.get("/protected", ClerkExpressRequireAuth(), (req, res, cb) => {
    
// })



app.listen(process.env.PORT,console.log(`Server is running on port ${process.env.PORT}`))