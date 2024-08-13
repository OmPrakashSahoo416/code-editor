/* eslint-disable no-unused-vars */
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react"
// import { Button } from "../../ui/button"
// import axios from "axios"
import { Navigate } from "react-router-dom"
// import { useEffect } from "react"
// import { useAuth } from '@clerk/clerk-react';
import SideBar from "./SideBar";
import CodeEditor from "./Editor";
import { useEffect, useRef, useState } from "react";
import {  initSocket } from "../../../socket";
import { useParams } from "react-router-dom";


// import { io } from "socket.io-client";
// import { createSocket } from "dgram";
// import { redirectDocument } from 'react-router-dom';





export default function Dashboard () {

    const [userDetails,setUserDetails] = useState(null)

    // console.log(userDetails)

    const [connectedUsers, setConnectedUsers] = useState([])
    const [content, setContent] = useState("");
    const {roomId} = useParams()

    // console.log(roomId)

    // user details to send to the server on connection and then server will send back the list of 
    // connected members and we will use that to display in the sidebar 

    // creating a socket in a reference so that is dont trigger a re render 
    const socketRef = useRef()
    // if (isLoaded) {
        const { user, isLoaded } = useUser();

        useEffect(() => {
            
            // if (socketRef.current) {
                //emit when code is edited in the room
                // console.log(content)
            //     socketRef.current.emit("code", {roomId:roomId, code:content})  

            // }
            
            if (isLoaded && user) {
                setUserDetails(user);


                // Ensure socket is only created once
                if (!socketRef.current) {
                  socketRef.current = initSocket();

                
                  
                

                socketRef.current.emit("roomid", roomId)

                  socketRef.current.on("asyncCodeUpdate", data => {
                    // console.log(data)

                    // now we have to set the content of all sockets the same emitted by the editing socket
                    setContent(data)

                  })


                // calling the on function to receive whenever we make a connection to a dashboard
                  socketRef.current.on("updateClientList", data => {
                    // console.log(data)
                    setConnectedUsers([...data])
                  })

                // now we basically have the socket so further code should be here
                // After joining the room emitting the user details
                socketRef.current.emit("userdetails", user)


                

                } else {
                    // emitting the updated code to server
                    socketRef.current.emit("asyncCodeUpdate", content)
                }
    
            }


            
            
        }, [isLoaded,user, connectedUsers, content, roomId])



        
        //in vite use env variables with this name => VITE_..... this env variables is only accessible in vite project
        
    return (
        <>
        <SignedIn>
            <div className="dashboardContent flex h-full w-full bg-slate-400">

                <SideBar connectedUsers={connectedUsers}></SideBar>
                <CodeEditor content={content} setContent={setContent} ></CodeEditor>
            </div>

        </SignedIn>
        <SignedOut>

            <Navigate to={'/'}></Navigate>
                
        </SignedOut>
        </>
    )
}