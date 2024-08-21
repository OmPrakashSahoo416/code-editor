import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
// import { setTimeout } from "timers/promises";

// hit any http request with /api/.. routed you will hit the server side codes and database access and requests

// setting up the env to use it
dotenv.config({ path: "./.env" });

const app = express();
// creating a http server since socket is not compatible with express
const server = http.createServer(app);

// to enable cors to avoid getting cross platform errors when connecting with the client side front end
// replace after deployment
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// to enable cross connection between server and client
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// to keep unique users only not that one user is connected by 2 devices so 2 user will be shown
// since it is a single array we do not have the functionality of multiple rooms now ...

let connectedClient = [];
let roomId = ""




io.on("connection", (socket) => {
  console.log("User connected!");

  // getting the room id
  socket.on("roomid", (data) => {
    // console.log(data);
    roomId = data;
    console.log(roomId)

    // after getting the room id from client we will make the socket join the room
    socket.join(data);

    console.log("User joined the room");

    
  });

  // we fetch the current user details of the socket
  socket.on("userdetails", (data) => {
    // console.log(data)

    // after joining the room we need to update the list of connected users
    const existingClient = connectedClient.find(
      (client) => client.id == data.id
    );
    if (!existingClient) {
      // same client do not exist so we will add it in the array
      connectedClient.push({ id: data.id, user: data, roomId:roomId });

      //update the list in the front end
      io.emit("updateClientList", connectedClient);
    }

    // upon disconnection match the client id and remove that from the connected client array
    socket.on("disconnect", () => {
      connectedClient = connectedClient.filter(
        (client) => client.id != data.id
      );
      console.log("User disconnected");
    //   socket.leave("asw")

      //update the list in the front end
    //   clearInterval(intervalId);
      io.emit("updateClientList", connectedClient);
    //   socket.leave();
    });
  });

  // getting the updated code
  socket.on("asyncCodeUpdate", (data) => {
    // we get the updated code to the server here
    console.log(data)

    // broadcast this data to every socket in the room except itself
    socket.broadcast.to(data.roomid).emit("asyncCodeUpdate", data)
    
  });

  // socket.on("code", data => {
  //     // console.log(data)

  //     // now the io needs to send the code back to all users in the room except for himself
  //     socket.broadcast.emit('code', data.code)
  // })
});

// io.on("test", data => {
//     console.log(data)
// })

// we can get the http requests and response values
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, cb) => {
  res.send("Server route");
});

server.listen(
  process.env.PORT,
  console.log(`Server is running on port ${process.env.PORT}`)
);
