import { useClerk } from "@clerk/clerk-react"




export default function Signout () {

    const {signOut} = useClerk()


    
    signOut().then((res) => {
        console.log("Signed out successfully!" + res)
    })

    return(
        <>     
        </>
    )
}