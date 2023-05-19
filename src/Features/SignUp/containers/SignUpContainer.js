import React, { useState } from "react";
import axios from "axios";
import { useActionData, useNavigate } from "react-router-dom";
import SignUpComponent from "../components/SignUpComponents";
import { ApiHandler } from "../constants/ApiHandler";
export default function SignUpContainer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUpFunction = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email: email,
        password: password,
      };
      const response = await ApiHandler.createUser(userData);

      navigate("/");
    } catch (error) {
      alert("wrong details");
    }
  };
  return (
    <SignUpComponent
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      SignUpFunction={SignUpFunction}
    />
  );
}
