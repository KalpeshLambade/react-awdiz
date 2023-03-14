import { useState } from "react";

function Range() {
    const [name,setName] =useState(0);

  function increment(){
    if(name <10){
      setName(name+1);
    }
    else{
      setName(10);
    }
  }
  function decrement(){
    setName(name-1);

    if(name < 1){
      setName(0);
    }
    else{
      setName(name-1);
    }
}
  return (
    <div>
      <h1>Initial Value {name} </h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}
export default Range;
