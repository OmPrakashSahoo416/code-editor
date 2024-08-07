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


// import { io } from "socket.io-client";
// import { createSocket } from "dgram";
// import { redirectDocument } from 'react-router-dom';





export default function Dashboard () {

    // const [userDetails,setUserDetails] = useState(null)

    // console.log(userDetails)

    const [connectedUsers, setConnectedUsers] = useState([])

    // user details to send to the server on connection and then server will send back the list of 
    // connected members and we will use that to display in the sidebar 

    // creating a socket in a reference so that is dont trigger a re render 
    const socketRef = useRef()
    // if (isLoaded) {
        const { user, isLoaded } = useUser();

        useEffect(() => {
            if (isLoaded && user) {

                // setUserDetails(user);

                // Ensure socket is only created once
                if (!socketRef.current) {
                  socketRef.current = initSocket();
                  console.log(user)
          
                  // Only emit events when socket is initialized
                  socketRef.current.emit("test", {name:user?.fullName, image:user?.imageUrl})

                // calling the emit function whenever we make a connection to a dashboard
                  socketRef.current.on("update", data => {
                    console.log(data)
                    setConnectedUsers([...data])
                  })


                }
    
            }
        }, [isLoaded,user, connectedUsers])

        // useEffect(() => {

        // })
        
        // so that we do not create more than 1 socket for each user 
        // if (!socketRef.current) {
        //     socketRef.current = initSocket()

        // }


        
        
            // socketRef.current = io("http://localhost:8000/")
        
            //in vite use env variables with this name => VITE_..... this env variables is only accessible in vite project
        
        
            // creating a socket connection when user enters the room 
            // socketRef.current = initSocket()
        
        

    return (
        <>
        <SignedIn>
            <div className="dashboardContent flex h-full w-full bg-slate-400">

                <SideBar connectedUsers={connectedUsers}></SideBar>
                <CodeEditor ></CodeEditor>
            </div>

        </SignedIn>
        <SignedOut>

            <Navigate to={'/'}></Navigate>
                
        </SignedOut>
        </>
    )
}