// use monaco editor to add code editor functionalities 
import Editor from '@monaco-editor/react';
import { db } from '../../../firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { setInterval } from 'timers/promises';
// import {  useEffect, useState } from 'react';




export default function CodeEditor({content, setContent}) {

    const [text, setText] = useState([])
    const [docid, setDocid] = useState("")
    console.log(content)
    const {roomId} = useParams()


    // content coming is empty fix that 
    // working like a charm 
    // keeping the interval to 2000 to reduce no of reads to db
    // in free tier limited to 50k ~ 13 hours if done every 1 sec
    useEffect(() => {
        const interval = setInterval(() => {

            content && db.collection(roomId).onSnapshot(snap => {
                setText(
                    snap.docs.map(doc => {
                        // console.log(doc.data().content)
                        setContent(doc.data().content)
                        setDocid(doc.id)
    
                        return (
                            doc.data().content
                        )
        
                    })
    
                )
            })
        }, 5000)

        return () => clearInterval(interval)
    }, [roomId, content,setContent])

    // It is running every time when there is any change in content
    function UpdateDatabaseContent (data) {

        db.collection(roomId).doc(docid).update({
            content:data
        })
    

    }


    return (
        <>
        <div className="codeEditor flex-[0.85] font-['Arial']">
        <Editor value={text[0]} onChange={(e) => (UpdateDatabaseContent(e),setContent({content:e, roomid:content.roomid}))} theme='vs-dark' defaultLanguage="javascript" />;

        </div>
        </>
    )
}