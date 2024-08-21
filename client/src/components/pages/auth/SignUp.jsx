import { SignUp} from "@clerk/clerk-react"


export default function Signup () {

    


    return(

        <>
        <div className="signup w-full h-full flex justify-center items-center">
            <SignUp signInUrl="/sign-in" fallbackRedirectUrl={"/home"}></SignUp>
            </div>
        </>

    )
}