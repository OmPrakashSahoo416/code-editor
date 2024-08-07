import { UserButton, useUser } from "@clerk/clerk-react";
import { Separator } from "../../ui/separator";
import { useEffect, useState } from "react";
// import { socket } from "../../../socket";

export default function SideBar({connectedUsers}) {
  const { user } = useUser();
  
  useEffect(() => {
      
    //   console.log(connectedUsers)
  }, [connectedUsers])

  // testing code on creating a connection using a key state
  // const [key, setKey] = useState("")

  return (
    <>
      <div className="sidebar flex-[0.15] h-full p-2 bg-neutral-800">
        <div className="userInfo flex items-center space-x-2  mb-3">
          <div className="connectedMembers flex flex-col space-y-1 ">
            <p className="text-neutral-100">Active members</p>

          {/* show the list of users connected to the particular room fetch from server someway */}
          {connectedUsers.map((userData, index) => {
            // console.log(userData[0])
            return (

                <div key={index} className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-rose-200 rounded-full">
                        <img src={userData.image} className="w-full h-full rounded-full object-cover" alt="" />
                    </div>
                    <p className="text-neutral-100">{userData["name"]}</p>
                </div>
            )
          })}

          
        </div>
          </div>
        <Separator></Separator>
      </div>
    </>
  );
}
