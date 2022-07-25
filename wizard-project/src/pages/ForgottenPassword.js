import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgottenPage from "../components/login/ForgottenPage";

import { LayoutContiner } from "../styles/MetarialStyles";

const ForgottenPassword = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const navigation = useNavigate();

  const saveUser = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  const handleSubmit = () => {
    const role = data.Role;
    const email = data.Email;
    const password = data.Password;
    const rePassword = data.RePassword;
    if (password === rePassword) {
      const value = {
        role,
        email,
        password,
      };
      axios
        .post(
          `http://localhost:9000/passwordReset/${role}`,
          value
        )
        .then((res) => {
          if (res.status === 200) {
            navigation("/");
          }
        });
    } else {
      setError("Password does't match");
    }
  };

  return (
    <LayoutContiner
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ForgottenPage
        data={data}
        setData={setData}
        error={error}
        handleSubmit={handleSubmit}
      />
    </LayoutContiner>
  );
};

export default ForgottenPassword;
