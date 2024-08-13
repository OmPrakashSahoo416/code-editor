/* eslint-disable react/prop-types */
// import { UserButton, useUser } from "@clerk/clerk-react";
import { useParams } from "react-router";
import { Separator } from "../../ui/separator";
import { useEffect} from "react";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router";

// import { socket } from "../../../socket";

export default function SideBar({connectedUsers}) {
  // const { user } = useUser();

  const navigate = useNavigate()

  const {roomId} = useParams()
  
  useEffect(() => {
      
      console.log(connectedUsers)
  }, [connectedUsers])

  // testing code on creating a connection using a key state
  // const [key, setKey] = useState("")

  return (
    <>
      <div className="sidebar flex-[0.15] flex justify-between flex-col h-full p-2 bg-neutral-800">
        <div className="">

        
        <div className="p-2 text-sm font-semibold text-center border w-full rounded-md bg-slate-200">
          <p className="font-bold text-xs text-slate-500 underline">Room Id</p>
          {roomId}</div>
          <hr className="my-5" />
        <div className="userInfo flex items-center space-x-2  mb-3">
          <div className="connectedMembers flex flex-col space-y-1 ">
            <p className="text-neutral-100">Active members</p>

          {/* show the list of users connected to the particular room fetch from server someway */}
          {connectedUsers.map((userData) => {
            // console.log(userData[0])
            return (

                <div key={userData.id} className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-rose-200 rounded-full">
                        <img src={userData.user.imageUrl} className="w-full h-full rounded-full object-cover" alt="" />
                    </div>
                    <p className="text-neutral-100">{userData.user.fullName}</p>
                </div>
            )
          })}

          
        </div>
          </div>
        <Separator></Separator>
        </div>

        <Button onClick={() => navigate("/")} size="sm" variant="secondary" className="w-full bottom-0">Leave</Button>
      </div>
    </>
  );
}
