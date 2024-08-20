import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
  
} from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
import { nanoid } from 'nanoid'
import { useEffect, useState } from "react"
import { redirect, useNavigate } from "react-router"




import { db } from "../../../firebase";
import firebase from "firebase/compat/app";
import { useAuth } from "@clerk/clerk-react"


function createWorkspaceDB(id, userId, title) {

  // file database with user details
  id && db.collection(id).add({
    title:title,
    content: "",
    userId:userId,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()

  })

  // user database with file details
  userId && db.collection(userId).add({
    
    userId:userId,
    fileId:id,
    title:title,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()

  })
  
  // list of rooms all total in firebase from all users....
  db.collection("listCollection").add({
    userId:userId,
    fileId:id,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()

  })

  

}

async function JoinWorkspace(value, setIsRoom) {
  // const navigate = useNavigate();

  const q = await db.collection("listCollection").where("fileId", "==", value).get()
  console.log(q.docs.length)

  if(q.docs.length == 0) {
    setIsRoom(false)
  } else if(q.docs.length == 1) {
    
    setIsRoom(true)
  }


  

}






export function DialogDemo({room, setRoom}) {

    const [id, setId] = useState(nanoid())
    const [name, setName] = useState("")
    const [isRoom, setIsRoom] = useState(false)

    // const navigate = useNavigate();

    


    // fetch the user id 
    const {userId} = useAuth()


    

    

    
    

    // console.log(isRoom)

    

  return (
    <>
    {/* Create workspace dialog box */}
    <Dialog >
      <div className="flex items-center mb-5 ">

      <DialogTrigger >
        <Button className="w-[150px]" variant="outline">Create Workspace</Button>
      </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Workspace</DialogTitle>
          <DialogDescription>
            Create workspace
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            
            <div
              
              className="col-span-3"
            ><input type="text" required placeholder="Enter workspace name" className="p-2 border rounded-md" value={name} onChange={(e) => setName(e.target.value)} /></div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
            <p className="col-span-3 p-2 rounded-md">{id}</p>
            
          </div>
            <Button ><div className="w-full h-full rounded-md " onClick={() => setId(nanoid())} > Generate</div></Button>
          
        </div>
        <DialogFooter>
          {/* add database here which will fetch the database create a user id collection inside it there
          will be list of rooms in his name */}
        <DialogClose><Button onClick={() => createWorkspaceDB(id, userId, name)} type="submit" variant="ghost"><div  onClick={() => setRoom([...room, {name:name, id:id}])} className="w-full h-full rounded-md ">Create</div></Button></DialogClose>
        </DialogFooter>
        
      </DialogContent>

    </Dialog>
    {/* Join workspace dialog box */}
    <Dialog>
      <div className="flex items-center space-x-5">

      <DialogTrigger >
        <Button className="w-[150px]">Join Workspace</Button>
      </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Workspace</DialogTitle>
          <DialogDescription>
            Join Workspace
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            
            <div
              
              className="col-span-3"
            ><input required type="text"  id="joinWorkspaceId" placeholder="Enter workspace id" className="p-2 border rounded-md" /></div>
          </div>
          
        </div>
        <DialogFooter>
          <Button onClick={() => JoinWorkspace(document.getElementById("joinWorkspaceId").value, setIsRoom) ? console.log(true): console.log(false)}  type="submit" variant="ghost"><div role="button" className="w-full h-full rounded-md" >Join</div></Button>
        </DialogFooter>
        
      </DialogContent>

    </Dialog>
    </>
  )
}
