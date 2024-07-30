import { Button } from "../../ui/button"
import axios from "axios"



export default Dashboard => {


    // logic to see this protected route 
    // fetch("/protected").then((res) => res.json()).then((js) => console.log(js))

    async function apiCall() {

        const response = await axios.get("/api/protected")
        const result = response.data
        console.log(result)
    }
    apiCall()
    
    


    return (
        <>
            <div className="dashboard">
                Welcome to the dashboard!
                <br />
                <a href="/sign-out"><Button size="lg">Sign out</Button></a>
            </div>
        </>
    )
}