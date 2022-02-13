import React from "react";
import Screen from "@/flex-ui/components/screen";
import dynamic from "next/dynamic";
import { CircularProgress } from "@mui/material";

const ScreenContextProvider = dynamic(
  () => import("@/flex-ui/contexts/screen-context")
);

const Login = () => {
  return (
    <ScreenContextProvider
      screenSource={{
        serverConfig: {
          method: "GET",
          url: "/api/flex/login",
        },
      }}
    >
      <Screen />
    </ScreenContextProvider>
  );
};

export default Login;
