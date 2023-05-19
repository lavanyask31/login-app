import React from "react";
import { NavLink } from "react-router-dom";
export default function LoginComponent({
  email,
  setEmail,
  password,
  setPassword,
  LoginFunction,
}) {
  return (
    <div>
      <h2>Login</h2>
      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <br />
        <br />
        <input type="submit" onClick={LoginFunction} />
      </form>
      <br />
      <NavLink to="/signup">Signup</NavLink>
    </div>
  );
}
