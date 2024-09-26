import React, { createContext, useContext } from "react";

export const AuthContext = createContext();

//  Provider
export const AuthProvider = ({ children }) => {
    //Gobal Function
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  return (
    <AuthContext.Provider value={storeTokenInLS}>
      {children}
    </AuthContext.Provider>
  );
};

//  Deliver
//costume HOOK
export const useAuth = ()=>{
    const authContextValue= useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
}
