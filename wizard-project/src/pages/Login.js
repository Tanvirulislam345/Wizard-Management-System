import { jsx } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";
import LoginForm from "../components/login/LoginForm";
import { useAuth } from "../Context/ContextProvieder";
import { LayoutContiner } from "../styles/MetarialStyles";

const Login = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const { user, setUser } = useAuth();
  console.log(user);
  const handleSubmit = () => {
    const role = data.Role;
    const email = data.Email;
    axios.get(`http://localhost:9000/${role}match/${email}`).then((res) => {
      const user = res.data[0];
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setError("");
      } else {
        setError("Email or Password does not match");
      }
    });
  };
  return (
    <LayoutContiner
      style={{
        height: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm data={data} setData={setData} handleSubmit={handleSubmit} />
    </LayoutContiner>
  );
};

export default Login;
