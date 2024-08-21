import { SignIn } from "@clerk/clerk-react"


export default function Signin () {


    return(

        <>
            <div className="signin w-full h-full flex justify-center flex-col space-y-3 items-center">

            <SignIn signUpUrl="/sign-up" fallbackRedirectUrl={"/home"} afterSignOutUrl={"/"}></SignIn>
            <div className="text-sm font-bold text-green-600">Temporary ID : temp@user.com</div>
            <div className="text-sm font-bold text-green-500">Password : 12345678</div>
            </div>
        </>

    )
}