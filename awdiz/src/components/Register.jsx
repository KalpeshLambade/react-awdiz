import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router =useNavigate();

  function Submit(e) {
    e.preventDefault();

    var dataFromLS = JSON.parse(localStorage.getItem("userDataReact")) || [];
    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
      if (dataFromLS[i].email === userData.email) {
        flag = true;
      }
    }

    if (flag) {
      alert("Email already Exsited");
      setUserData.email ='';
      setUserData({...userData,['email']:''});

    } else if (userData.password.length < 8) {
      alert("password must be greater than 8 characters");
      setUserData({...userData,['password']:''});

    } else {
      dataFromLS.push(userData);
      localStorage.setItem("userDataReact", JSON.stringify(dataFromLS));
      router('/login');
      setUserData({ name: "", email: "", password: "" });

    }
  }

  function featchData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <div>
      <h1>Registeration Form </h1>
      <form
        onSubmit={(e) => {
          Submit(e);
        }}
      >
        <label>Name</label>
        <input
          onChange={(e) => {
            featchData(e);
          }}
          value={userData.name}
          name="name"
          type="text"
          placeholder="Enter your name"
          required
        />{" "}
        <br />
        <br />
        <label>Email </label>
        <input
          onChange={(e) => {
            featchData(e);
          }}
          value={userData.email}
          name="email"
          type="email"
          placeholder="Enter your Email"
          required
        />
        <br />
        <br />
        <label>Password</label>
        <input
          onChange={(e) => {
            featchData(e);
          }}
          value={userData.password}
          name="password"
          type="password"
          placeholder="Enter your Password"
          required
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Register;
