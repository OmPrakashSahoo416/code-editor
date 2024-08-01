// use monaco editor to add code editor functionalities 
import Editor from '@monaco-editor/react';

export default function CodeEditor() {



    return (
        <>
        <div className="codeEditor flex-[0.8]">
        <Editor theme='vs-dark' defaultLanguage="python" defaultValue="// Start your code here ..." />;

        </div>
        </>
    )
}