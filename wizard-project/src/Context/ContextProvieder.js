import React, { createContext, useContext } from "react";
import useUser from "../hooks/useUser";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const ContextProvieder = ({ children }) => {
  const allContext = useUser();
  return (
    <authContext.Provider value={allContext}>{children}</authContext.Provider>
  );
};

export default ContextProvieder;
