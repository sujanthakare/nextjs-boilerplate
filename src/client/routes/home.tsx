import React from "react";
import dynamic from "next/dynamic";
import Screen from "@/flex-ui/components/screen";

const ScreenContextProvider = dynamic(
  () => import("@/flex-ui/contexts/screen-context")
);

const Home = () => {
  return (
    <ScreenContextProvider
      screenSource={{
        serverConfig: {
          method: "GET",
          url: "/api/flex/start",
        },
      }}
    >
      <Screen />
    </ScreenContextProvider>
  );
};

export default Home;
