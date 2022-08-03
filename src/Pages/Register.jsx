import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register-container">
      <form>
        <label name="name">
          <span>Name</span>
          <input type="text" name="name"></input>
        </label>

        <label name="email">
          <span>Email</span>
          <input type="email" name="email"></input>
        </label>

        <label name="password">
          <span>Password</span>
          <input type="password" name="password"></input>
        </label>
      </form>
    </div>
  );
};

export default Register;
