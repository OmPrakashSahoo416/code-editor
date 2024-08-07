import { SignedIn, SignedOut, RedirectToSignIn, UserButton, useUser } from "@clerk/clerk-react"
// import { Button } from "../../ui/button"
import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from '@clerk/clerk-react';
// import SideBar from "./SideBar";
// import CodeEditor from "./Editor";
// import { useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { DialogDemo } from "./dialogBox";
import { useState } from "react";





export default Dashboard => {

    const {isSignedIn} = useAuth()
    const {user} = useUser()

    const navigate = useNavigate()

    const [room, setRoom] = useState([])

    // console.log(user)



    
    


    return (
        <>
        <SignedIn>
            <div className="homeContent h-full w-full ">

                <div className="header w-full h-[75px] bg-slate-100 flex items-center justify-center"><UserButton></UserButton> </div>

                <div className="heading mt-10 p-10 text-xl font-bold text-slate-600">Welcome to code editor</div>

                <div className="p-10">

                    {/* <Button className="peer">Create Workspace</Button> */}
                    <DialogDemo room={room} setRoom={setRoom} />
                    {/* <div className="z-[100] bg-black/30 h-screen w-screen"></div> */}
                </div>

                <div className="workspaceList p-10 flex flex-wrap ">

                    {room.map((room, index) => {
                        return (
                            <div onClick={() => navigate(`/editor/${room.id}`)} key={index} className="w-[200px] p-2 h-[150px] mb-5 mr-5 rounded-md hover:cursor-pointer overflow-hidden bg-slate-300">
                                
                                <p>{room.name}</p>
                                <p>{room.id}</p>
                            </div>
                        )
                    })}

                   

                </div>

            </div>



        </SignedIn>
        <SignedOut>
            <Navigate to={'/'}></Navigate>

        </SignedOut>

            
        </>
    )
}