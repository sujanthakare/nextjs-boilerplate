import React from "react";

export const AuthContext = React.createContext({} as any);

export const AuthContextProvider: React.FC = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
