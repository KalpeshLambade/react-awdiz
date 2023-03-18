import { useState } from "react";

function Efeect2(){
    const[data, setData] =useState();

    useState(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(Json =>setData(Json));
    },[]);
    return(
        <div>
            {data && data.map((e,i) => (
                <div key={i}>
                    <img src={e.image} alt="img"/>
                    <p>{e.title}</p>
                    <p>{e.price}</p>
                </div>
            ))}
        </div>
    );
}
export default Efeect2;