// UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserLoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (emailaddress, password) => {
    // Simulate a login API call
    const response = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailaddress, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setUser({ data });

      return response;

      // Set user data (e.g., { id, username, token })
    } else {
      console.error("Login failed");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
