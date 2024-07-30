import { Button } from "../ui/button"
import { Link } from "react-router-dom";
// import { SignIn } from "@clerk/clerk-react"




export default LandingPage => {


    return (
        <>
            <div className="w-full h-full flex justify-center space-x-5 items-center">
                <a href="/sign-in"><Button size="lg">Sign in</Button></a>
                <a href="/sign-up"><Button variant="secondary" size="lg">Sign up</Button></a>
            </div>
        
        </>
    )
}