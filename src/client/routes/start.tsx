import React from "react";
import Screen from "@/flex-ui/components/screen";
import ScreenContextProvider from "@/flex-ui/contexts/screen-context";
import { useParams } from "@/react-ui/simple-routing/params";

const Start = () => {
  const params = useParams();
  console.log(params);

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

export default Start;
