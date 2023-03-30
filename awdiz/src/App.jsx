// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Range from "./components/Range";
import Register from "./components/Register";
import Effect from "./components/Effect";
// import Efeect2 from "./components/Efeect2";
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";

function App() {

  const[userName, setUserName] =useState("Kalpesh");
  const[userEmail, setUserEMail] =useState("abc@gmail.com");
  const[userNumber, setUserNumber] =useState("123456789");
  return (
    <div className="App">
      {/* <Effect/>
      <Efeect2/> */}
      {/* <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path="/effect" element={<Effect/>} />
      </Routes> */}

      <Home userData ={userName} userEmail={userEmail} userNumber={userNumber}></Home>
    </div>
  );
}

export default App;
