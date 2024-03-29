import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";
import { useAuth } from "../Context/ContextProvieder";
import { LayoutContiner } from "../styles/MetarialStyles";

const Login = () => {
  const [data, setData] = useState({});
  const { setUser } = useAuth();
  const [error, setError] = useState("");
  const navigation = useNavigate();

  const saveUser = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  const handleSubmit = () => {
    const role = data.Role;
    const email = data.Email;
    const password = data.Password;

    const value = {
      role,
      email,
      password,
    };
    axios
      .post(`https://wiztecbd.online/api/${role}match/${email}`, value)
      .then((res) => {
        const user = res.data;
        if (user) {
          saveUser(user);
          setUser(user);
          setError("");
          if (user.Role === "admin") {
            navigation(`/dashboard`);
          } else if (user.Role === "client") {
            navigation(`/client/profile/${user.ClientId}`);
          } else if (user.Role === "employee") {
            navigation(`/employee/profile/${user.EmployeeId}`);
          }
        } else {
          setError("Email or Password does not match");
        }
      });
  };

  return (
    <LayoutContiner
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm
        data={data}
        setData={setData}
        error={error}
        handleSubmit={handleSubmit}
      />
    </LayoutContiner>
  );
};

export default Login;
