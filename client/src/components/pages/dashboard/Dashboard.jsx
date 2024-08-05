import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react"
import { Button } from "../../ui/button"
// import axios from "axios"
import { Navigate } from "react-router-dom"
// import { useEffect } from "react"
import { useAuth } from '@clerk/clerk-react';
import SideBar from "./SideBar";
import CodeEditor from "./Editor";
import { useEffect, useRef } from "react";
import { initSocket } from "../../../socket";
import { io } from "socket.io-client";
// import { createSocket } from "dgram";
// import { redirectDocument } from 'react-router-dom';

async function createSocket() {

    return await initSocket();
}




export default Dashboard => {

    const {isSignedIn} = useAuth()

    // creating a socket in a reference so that is dont trigger a re render 
    const socketRef = useRef()

    // socketRef.current = io("http://localhost:8000/")

    //in vite use env variables with this name => VITE_..... this env variables is only accessible in vite project
    


    useEffect(() => {

        socketRef.current = createSocket()

    }, [])




    



    

    

    // const navigate = useNavigate();

    

    // logic to see this protected route 
    // fetch("/protected").then((res) => res.json()).then((js) => console.log(js))

    // async function apiCall() {

    //     const response = await axios.get("/api/protected")
    //     const result = response.data
    //     console.log(result)
    // }
    // apiCall()
    
    


    return (
        <>
        <SignedIn>
            <div className="dashboardContent flex h-full w-full bg-slate-400">

                <SideBar></SideBar>
                <CodeEditor></CodeEditor>
            </div>
















        </SignedIn>
        <SignedOut>

            <Navigate to={'/'}></Navigate>
                
                

        </SignedOut>

            
        </>
    )
}