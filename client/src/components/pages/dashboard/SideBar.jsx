import {  UserButton, useUser } from "@clerk/clerk-react";
import {Separator} from "../../ui/separator"
import { useEffect, useState } from "react";
import { socket } from "../../../socket";





export default function SideBar(){

    const {user} = useUser()

    // testing code on creating a connection using a key state 
    const [key, setKey] = useState("")

    


    return (
        <>

        <div className="sidebar flex-[0.2] h-full p-2 bg-sky-500">
            <div className="userInfo flex items-center space-x-2  mb-3">

            <UserButton />
            <p className="text-sm font-bold text-slate-100 ">Hola, <span className="text-slate-50">{user.fullName}</span></p>
            </div>
            <Separator ></Separator>
            <input type="text" className="p-2 " onChange={e => setKey(e.target.value)} value={key} placeholder="Enter key" />
            
        </div>
        </>
    )
}