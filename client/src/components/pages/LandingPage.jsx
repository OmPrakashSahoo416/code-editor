import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "../ui/button"
import { Link, Navigate } from "react-router-dom";

// navigate component is used to navigate to different pages in the client side react routes 
// if u are signed in then the following code inside it will be triggered same for signed out 





export default LandingPage => {


    return (
        <>
        <SignedIn>
            <Navigate to={'/home'}></Navigate>
        </SignedIn>

        <SignedOut>

            <div className="w-full h-full flex justify-center space-x-5 items-center">
                <a href="/sign-in"><Button size="lg">Sign in</Button></a>
                <a href="/sign-up"><Button variant="secondary" size="lg">Sign up</Button></a>
            </div>
        </SignedOut>

        
        </>
    )
}