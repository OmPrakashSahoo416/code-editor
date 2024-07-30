import { useClerk } from "@clerk/clerk-react"


import { Link } from "react-router-dom"


export default  Signout => {

    const {signOut} = useClerk()


    
    signOut().then((res) => {
        console.log("Signed out successfully!")
    })

    return(
        <>     
        </>
    )
}