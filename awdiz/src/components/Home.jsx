import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Navbar from "./Navbar"

function Home({userData, userEmail, userNumber}){
    const [userDataHome, setUserDataHome] =useState();
    const[userEmailHome, setUserEmailHome] =useState();
    useEffect(() => {
        setUserDataHome(userData)
        setUserEmailHome(userEmail)
    },[userData,userEmail,userNumber])

    return(
        <div>
            {/* <h1>Home</h1>
            <button onClick={() => {toast.loading('Waiting...');}} >Toast</button> */}
            <Navbar userData ={userData} userEmail={userEmail} userNumber={userNumber}/>
            <h1>Welcome to Home - {userDataHome}</h1>
            <p>Your Email address is - {userEmailHome}</p>
        </div>
    )
}

export default Home;
