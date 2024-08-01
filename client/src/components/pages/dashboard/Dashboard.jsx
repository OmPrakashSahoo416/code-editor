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
import { actions } from "../../../actions/actions";
// import { redirectDocument } from 'react-router-dom';





export default Dashboard => {

    const {isSignedIn} = useAuth()
    // creating a socket in a reference so that is dont trigger a re render 
    const socketRef = useRef()


    useEffect(() => {



        const initializeSocket = async () => {
            socketRef.current = await initSocket()
            socketRef.current.emit(actions.JOIN)
        }


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