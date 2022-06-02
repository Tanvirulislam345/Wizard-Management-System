import React, { createContext, useContext, useEffect, useState } from "react";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const ContextProvieder = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("user"));
    setLoading(true);
    if (data) {
      setUser(data);
      console.log(data);
    }
    setLoading(false);
  }, []);

  return (
    <authContext.Provider value={{ user, loading }}>
      {children}
    </authContext.Provider>
  );
};

export default ContextProvieder;
