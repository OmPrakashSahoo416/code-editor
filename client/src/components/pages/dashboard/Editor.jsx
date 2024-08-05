// use monaco editor to add code editor functionalities 
import Editor from '@monaco-editor/react';
import { useState } from 'react';

export default function CodeEditor() {

    const [content, setContent] = useState("");

    // console.log(content)


    return (
        <>
        <div className="codeEditor flex-[0.8]">
        <Editor value={content} onChange={(e) => setContent(e)} theme='vs-dark' defaultLanguage="python" defaultValue="// Start your code here ..." />;

        </div>
        </>
    )
}