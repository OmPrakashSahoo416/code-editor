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
import { useState } from "react"
import { redirect, useNavigate } from "react-router"

// import { Label } from "@/components/ui/label"




export function DialogDemo({room, setRoom}) {

    const [id, setId] = useState("Generate ID ")
    const [name, setName] = useState("")

    const navigate = useNavigate();

    function OpenPrompt() {
      return (
        <></>

      )
    }
    

    // console.log(room)

    

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
            
            <p className="col-span-3 border p-2 rounded-md">{id}</p>
            
          </div>
            <Button ><div role="button" className="w-full h-full rounded-md " onClick={() => setId(nanoid())} > Generate</div></Button>
          
        </div>
        <DialogFooter>
          <Button type="submit" variant="ghost"><div role="button" onClick={() => setRoom([...room, {name:name, id:id}])} className="w-full h-full rounded-md "><DialogClose></DialogClose>Create</div></Button>
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
            ><input required type="text" id="joinWorkspaceId" placeholder="Enter workspace id" className="p-2 border rounded-md" /></div>
          </div>
          
        </div>
        <DialogFooter>
          <Button onClick={() => navigate(`/editor/${document.getElementById('joinWorkspaceId').value}`)}  type="submit" variant="ghost"><div role="button" className="w-full h-full rounded-md" >Join</div></Button>
        </DialogFooter>
        
      </DialogContent>

    </Dialog>
    </>
  )
}
