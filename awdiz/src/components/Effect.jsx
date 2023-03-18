import { useEffect, useState } from "react";


const Effect = () => {
    const[number, setNumber] = useState(0);
    const[number2, setNumber2] = useState(0);

    // useEffect(() => {alert("Working")});
    // will execute the code on every render

    // useEffect(() => {alert("Will execute the code very first time")}, []);
    //will execute the code very first time

    // useEffect(() => {alert("will execute code when state change")},[number]);
    //will execute the code very first time & the specific state will change

    useEffect(() => {alert("for mulltiple state")}, [number,number2]);
    // will execute the code very first time & for multiple state that we passed

    return(
        <div>
            <h1>number {number}</h1>
            <h1> number 2 {number2}</h1>
            <button onClick={() => {setNumber(number+1)}}>Click</button>
            <button onClick={() => {setNumber2(number2+1)}}>Click for 1</button>
        </div>
    );
}
export default Effect;