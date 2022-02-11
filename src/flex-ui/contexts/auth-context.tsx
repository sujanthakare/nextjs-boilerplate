import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";

export const AuthContext = React.createContext({} as any);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log("WATCH THIS");

    setTimeout(() => {
      // router.push("/login");
    }, 1000);
  }, [router]);

  if (loading) {
    return (
      <div
        css={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
