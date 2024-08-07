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
import { Input } from "@/components/ui/input"
import { nanoid } from 'nanoid'
import { useState } from "react"
// import { Label } from "@/components/ui/label"




export function DialogDemo({room, setRoom}) {

    const [id, setId] = useState()
    const [name, setName] = useState("")
    

    // console.log(room)

    

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline">Create Workspace</Button>
      </DialogTrigger>
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
            ><input type="text" placeholder="Enter workspace name" className="p-2 border rounded-md" value={name} onChange={(e) => setName(e.target.value)} /></div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
            <p className="col-span-3 border p-2 rounded-md">{id}</p>
            
          </div>
            <Button ><div role="button" className="w-full h-full rounded-md " onClick={() => setId(nanoid())} > Generate</div></Button>
          
        </div>
        <DialogFooter>
          <Button type="submit" variant="ghost"><div role="button" onClick={() => setRoom([...room, {name:name, id:id}])} className="w-full h-full rounded-md ">Create</div></Button>
        </DialogFooter>
        
      </DialogContent>
    </Dialog>
  )
}
