import React from "react";

import { useContext, useState } from "react";
import { userinfoContext } from "../contests/userinformation";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../contests/LoginStatus";

function Login() {
  const navigate = useNavigate();
  const { userData } = useContext(userinfoContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginStatus, setLoginStatus, setLoginedUser } = useContext(loginContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const logininfo=userData.filter((data)=>data.email === username && data.password === password);
    setLoginedUser(logininfo[0].Name);
    if (logininfo.length>0) {
      if (logininfo[0].email==='admin@babyzone.com' && logininfo[0].password==='admin123') {
        navigate('/admin')
      }else{
        navigate('/')
        setLoginStatus(!loginStatus);
      }
      
    }
  };
  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username/Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="enter your email id"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="register-option">
        <p>Don't have an account?</p>
        <button className="register-button" onClick={()=>{navigate('/registration-page')}}>Register here</button>
      </div>
    </div>
  );
}

export default Login;
