import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
// import { Button } from "../../ui/button"
import { Navigate, useNavigate } from "react-router-dom"
// import { useAuth } from '@clerk/clerk-react';
// import SideBar from "./SideBar";
// import CodeEditor from "./Editor";
// import { useEffect, useRef } from "react";
// import { Button } from "../../ui/button";
import { DialogDemo } from "./dialogBox";
import { useState } from "react";





export default function Dashboard() {

    // const {isSignedIn} = useAuth()
    // const {user} = useUser()

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
                            <>
                            <div className="flex flex-col items-start mb-5 mr-5 w-[200px] space-y-1">

                                <div onClick={() => navigate(`/editor/${room.id}`)} key={index} className="w-full p-2 h-[150px]  rounded-md hover:cursor-pointer overflow-hidden bg-slate-300">
                                    
                                    <p>{room.name}</p>
                                </div>
                                <p className="p-2 text-xs font-semibold text-center border w-full rounded-md bg-slate-200">{room.id}</p>
                            </div>
                            </>
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