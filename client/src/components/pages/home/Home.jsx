import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";
// import { Button } from "../../ui/button"
import { Navigate, useNavigate } from "react-router-dom";
// import { useAuth } from '@clerk/clerk-react';
// import SideBar from "./SideBar";
// import CodeEditor from "./Editor";
// import { useEffect, useRef } from "react";
// import { Button } from "../../ui/button";
import { DialogDemo } from "./dialogBox";
import { useEffect, useState } from "react";

//TODO:functionality to add users specific to each room not every one connected on same room

// database imports
import { db } from "../../../firebase";
import { Button } from "../../ui/button";
// import firebase from "firebase/compat/app";

async function deleteRoom(userId, docId, fileId) {
  // deleting from the user table
  db.collection(userId).doc(docId).delete();

  // deleting from the list of room collection in database
  const q = await db
    .collection("listCollection")
    .where("fileId", "==", fileId)
    .get();
  q.docs.map((doc) => {
    const deleteDocId = doc.id;
    // console.log(deleteDocId)

    db.collection("listCollection").doc(deleteDocId).delete();
  });
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [room, setRoom] = useState([]);
  // const [fileId, setFileId] = useState("")

  const { userId } = useAuth();

  useEffect(() => {
    userId &&
      db
        .collection(userId)
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) => {
          setRoom(
            snap.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
  });

  return (
    <>
      <SignedIn>
        <div className="homeContent h-full w-full font-['Arial']">
          <div className="header w-full h-[75px] bg-slate-100 flex items-center justify-center">
            <UserButton></UserButton>{" "}
          </div>


          <div className="p-10 mb-10">
            {/* <Button className="peer">Create Workspace</Button> */}
            <DialogDemo room={room} setRoom={setRoom} />
            {/* <div className="z-[100] bg-black/30 h-screen w-screen"></div> */}
          </div>
          <div className="px-10 text-sm font-semibold ">
            Your workspaces
          </div>

          <div className="workspaceList px-10 py-5 flex flex-wrap ">
            {room.map((eachRoom) => {
              return (
                <div
                  key={eachRoom.id}
                  className={` flex flex-col items-start mb-5 mr-5 w-[200px] space-y-1`}
                >
                  <div
                    onClick={() => navigate(`/editor/${eachRoom.data.fileId}`)}
                    className={`bg-[url('https://static.vecteezy.com/system/resources/thumbnails/008/370/790/small_2x/empty-room-interior-for-gallery-exhibition-vector.jpg')] bg-cover bg-center  w-full p-2 h-[150px]  rounded-md hover:cursor-pointer overflow-hidden bg-slate-300 flex justify-center items-center`}
                  >
                    <p className="text-lg font-semibold  text-slate-600">
                      {eachRoom.data ? eachRoom.data.title : ""}
                    </p>
                  </div>
                  <p className="p-2 text-xs font-semibold text-center border w-full rounded-md bg-green-200">
                    {eachRoom.data ? eachRoom.data.fileId : ""}
                  </p>
                  <Button
                    onClick={() =>
                      deleteRoom(userId, eachRoom.id, eachRoom.data.fileId)
                    }
                    variant="destructive"
                    className="w-full"
                    size="sm"
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <Navigate to={"/"}></Navigate>
      </SignedOut>
    </>
  );
}
