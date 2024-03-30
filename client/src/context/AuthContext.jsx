"use client";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();




export const AuthContextProvider = ({ children }) => {
    const [status, setStatus] = useState("");

  
    useEffect(() => {
      // Check if status is null or undefined
      if (status === null || status === undefined) {
        // Set default status in localStorage and component state
        localStorage.setItem("status", "unauthenticated");
        setStatus("unauthenticated");
      } else {
        // Retrieve status from localStorage and update component state
        setStatus(localStorage.getItem("status"));
      }
    }, [status]); 

  return (
    <AuthContext.Provider value={{status,setStatus }}>
      {children}
    </AuthContext.Provider>
  );
};