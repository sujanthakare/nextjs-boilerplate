import React from "react";
import Screen from "@/flex-ui/components/screen";

import { useParams } from "@/react-ui/simple-routing/params";
import dynamic from "next/dynamic";
import { CircularProgress } from "@mui/material";

const ScreenContextProvider = dynamic(
  () => import("@/flex-ui/contexts/screen-context"),
  { loading: () => <CircularProgress /> }
);

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
