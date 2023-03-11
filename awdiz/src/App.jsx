import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
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
    <div className="App">
      <Navbar/>
      <p>Welcome to homepage </p>
      <div>
        <h1>Initial Value {name} </h1>
        <button onClick={ () => increment()}>+</button>
        <button onClick ={ () => decrement()}>-</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
