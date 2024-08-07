import { SignIn } from "@clerk/clerk-react"
import { Link } from "react-router-dom"


export default Signin => {


    return(

        <>
            <div className="signin w-full h-full flex justify-center items-center">

            <SignIn signUpUrl="/sign-up" fallbackRedirectUrl={"/home"} afterSignOutUrl={"/"}></SignIn>
            </div>
        </>

    )
}