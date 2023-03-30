import { useContext } from "react";
import UserContext from "../index";

function Navbar(){
    const userName =useContext(UserContext);
    return(
        <div>
            Navbar -{userName}
        </div>
    )
}

export default Navbar;