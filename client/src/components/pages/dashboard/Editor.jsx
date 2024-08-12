// use monaco editor to add code editor functionalities 
import Editor from '@monaco-editor/react';
// import {  useEffect, useState } from 'react';




export default function CodeEditor({content, setContent}) {

    

    

    // console.log(content)
    // useEffect(() => {



    // }, [content])


    return (
        <>
        <div className="codeEditor flex-[0.85]">
        <Editor value={content} onChange={(e) => setContent(e)} theme='vs-dark' defaultLanguage="python" defaultValue="// Start your code here ..." />;

        </div>
        </>
    )
}