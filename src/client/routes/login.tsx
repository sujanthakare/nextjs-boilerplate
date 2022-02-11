import React from "react";
import Screen from "@/flex-ui/components/screen";
import ScreenContextProvider from "@/flex-ui/contexts/screen-context";

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
