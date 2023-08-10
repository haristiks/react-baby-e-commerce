import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { userinfoContext } from "../contests/userinformation";

function SignUp() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(userinfoContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData((d)=>d=[...userData,
      {firstName:name,email:email, password:password}
    ])
    alert('user registration Successfull');
    setName('');
    setEmail('');
    setPassword('');

  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="your name here"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="your-mail@example.com"
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
        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </form>
      <div className="login-options">
        <p>Already have an account?</p>
        <button className="login-button" onClick={()=>{navigate('/login-page')}}>Login here</button>
        <p>Or</p>
        <button className="google-signup-button">
          <i className="fa-brands fa-google"></i>Sign up with Google
        </button>
      </div>
    </div>
  );
}

export default SignUp;
