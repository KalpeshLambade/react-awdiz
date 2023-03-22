import { toast } from "react-hot-toast";

function Home(){
    return(
        <div>
            <h1>Home</h1>
            <button onClick={() => {toast.loading('Waiting...');}} >Toast</button>
        </div>
    )
}

export default Home;
