import React from "react";
import { NavLink } from "react-router-dom";
export default function SignUpComponent({
  email,
  setEmail,
  password,
  setPassword,
  SignUpFunction,
}) {
  return (
    <div>
      <h2>SignUp</h2>
      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <input type="submit" onClick={SignUpFunction} />
      </form>
      <br />
      <NavLink to="/">Login Page</NavLink>
    </div>
  );
}
