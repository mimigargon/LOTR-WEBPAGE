import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerFormChange, registerFormSubmit } from "../Redux/auth/auth.actions";
import "./Register.scss";

const Register = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const registerForm = useSelector((state) => state.auth.registerForm);

const submitRegister = (ev) => {
  ev.preventDefault();
  const callback = () => navigate("/home");
  dispatch(registerFormSubmit(callback));
}

  return (
    <div className="register-container">
      <form onSubmit={submitRegister}>
        <label name="name">
          <span>Name</span>
          <input type="text" name="name" value={registerForm.name} onChange={(ev) => dispatch(registerFormChange(ev))}></input>
        </label>

        <label name="email">
          <span>Email</span>
          <input type="email" name="email" value={registerForm.email} onChange={(ev) => dispatch(registerFormChange(ev))}></input>
        </label>

        <label name="password">
          <span>Password</span>
          <input type="password" name="password" value={registerForm.password} onChange={(ev) => dispatch(registerFormChange(ev))}></input>
        </label>

        <button className='register-btn' type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
