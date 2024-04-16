import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const initialStateToken = localStorage.getItem("token") || null;

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const loginWithEmailAndPassword = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    console.log(data);

    setToken(data.token || null);
    setEmail(data.email || null);

    return data;
  };

  const registerWithEmailAndPassword = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    setToken(data.token || null);
    setEmail(data.email || null);
    return data;
  };

  const logout = () => {
    setToken(null);
  };

  const getUserEmail = async () => {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    setEmail(data.email || null);
    return data;
  };

  return (
    <UserContext.Provider
      value={{
        loginWithEmailAndPassword,
        registerWithEmailAndPassword,
        token,
        logout,
        email,
        getUserEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
