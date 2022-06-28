import React, { useState } from "react";
import Input from "../input";
import "./style.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    //fetch to API.
    e.preventDefault();
    alert('now is time to send this data to API  >' + 
      JSON.stringify({
        nome: name,
        email: email,
        gender: gender,
        password: password,
      })
    );
    console.log({
      nome: name,
      email: email,
      gender: gender,
      password: password,
    });
  };
  
  const Select = () => {
    return (
      <select
        className="select-form"
        onChange={e => setGender(e.target.value)}
        name="gender"
        id="gender"
        value={gender}
      >
        <option value="" defaultValue disabled hidden >
          I would describe my user type as
        </option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    );
  };
  return (
      <div className="wrapper-form">
        <header className="header-form">
          <h1>Let’s set up your account </h1>
          <p>
            Already have an account? <a href="https://devdanilonascimento.com" target='_blank'>Sign in</a>
          </p>
        </header>
        <div>
          <form className="body-form" onSubmit={(e) => onSubmit(e)}>
            <Input
              placeholder={"Your name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder={"Email address"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
              <Select />
            <Input
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              minLength={8}
            />
            <p className="minimun">Minimum 8 characters</p>
            <button className="button-form">Next</button>
            <p className="last-text">
              By clicking the “Next” button, you agree to creating a free
              account, and to <a href="https://devdanilonascimento.com" target='_blank'>Terms of Service</a> and <a href="https://devdanilonascimento.com" target='_blank'>Privacy Policy.</a>
            </p>
          </form>
        </div>
      </div>
  );
}
