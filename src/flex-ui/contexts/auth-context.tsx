import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";

export const AuthContext = React.createContext({} as any);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.push("/login");
      setLoading(false);
    }, 1000);
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
