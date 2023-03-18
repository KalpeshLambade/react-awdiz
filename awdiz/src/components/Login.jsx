import { useState } from "react";
import { json, useNavigate } from "react-router-dom";


function Login(){
    const[data, setData] = useState({email:'', password: ''});
    const router =useNavigate();

    function submit(e){
        e.preventDefault();
        var dataFromLs =JSON.parse(localStorage.getItem("userDataReact"));

        var flag =false;
        for(var i=0; i<dataFromLs.length; i++){
            if(dataFromLs[i].email === data.email && dataFromLs[i].password === data.password){
                flag =true;
            }
        }
        if(flag){
            localStorage.setItem("currentUser", JSON.stringify(data.email))
            setData({email:'', password: ''});
            router('/register');
            alert("Login sucessful");
        }
        else{
            setData({email:'', password: ''});
            alert("Password or Email not matched");
        }
    }
    function formData(e){
        var name= e.target.name;
        var value = e.target.value;

        setData({...data, [name]:value });
    }
    return(
        <div>
            <h1>Log in</h1>
            <form onSubmit={(e) => {submit(e)}}>
                <label>Email</label><br/>
                <input type="email" onChange={(e) => {formData(e)}} name='email' value={data.email} required/><br/>
                <label>Password</label><br/>
                <input type="password" onChange={(e) => {formData(e)}} name ='password' value={data.password} required/><br/><br/>
                <input type="submit" value="submit"/>

            </form>
        </div>
    )
}
export default Login; 