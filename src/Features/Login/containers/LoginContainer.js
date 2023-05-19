import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponents";
import { ApiHandler } from "../constants/ApiHandler";
export default function LoginContainer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginFunction = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiHandler.getUser(email, password);
      if (response.length > 0) {
        navigate("/home", { state: { id: email } });
      } else {
        alert("invalid credentials");
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <LoginComponent
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      LoginFunction={LoginFunction}
    />
  );
}
