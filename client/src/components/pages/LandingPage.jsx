import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "../ui/button"
import {  Navigate } from "react-router-dom";

// navigate component is used to navigate to different pages in the client side react routes 
// if u are signed in then the following code inside it will be triggered same for signed out 





export default function LandingPage()  {


    return (
        <>
        <SignedIn>
            <Navigate to={'/home'}></Navigate>
        </SignedIn>

        <SignedOut>

            <div className="w-full font-['Arial'] h-full flex justify-center flex-col space-y-5 items-center">
                <img src="https://cdn.openart.ai/published/cCMNRSjCdHvmZqwXYfIm/S_vyYw-n_XDuy_1024.webp" className="w-20 h-20 rounded-full drop-shadow-lg border-2 border-green-500" alt="" />
                <div className="text-xl font-bold text-slate-600">Welcome to <span className="text-green-500    underline decoration-wavy ">CollabCode.</span></div>
                <div className="flex items-center justify-center space-x-3">
                    <a href="/sign-in"><Button size="lg" className="bg-green-500 hover:bg-green-600">Sign in</Button></a>
                    <a href="/sign-up"><Button className="bg-green-50 hover:bg-green-100" variant="secondary" size="lg">Sign up</Button></a>

                </div>
            </div>
        </SignedOut>

        
        </>
    )
}