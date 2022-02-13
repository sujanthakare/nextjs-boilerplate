import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FlexRoute, FlexRouterProvider } from "@/react-ui/simple-routing";

const Login = dynamic(() => import("./routes/login"));
const NotFound = dynamic(() => import("./routes/not-found"));
const Home = dynamic(() => import("./routes/home"));

const routeState = {
  currentPath: "",
};

const SPARoot = () => {
  const router = useRouter();
  const { asPath } = router;

  let currentPath = asPath;

  if (currentPath === "/[...routes]" && !routeState.currentPath) {
    return null;
  } else {
    currentPath == routeState.currentPath;
    routeState.currentPath = currentPath;

    return (
      <FlexRouterProvider location={currentPath}>
        <FlexRoute path="/" element={<Home />} />
        <FlexRoute path="/login" element={<Login />} />
        <FlexRoute path="/:rest*" element={<NotFound />} />
      </FlexRouterProvider>
    );
  }
};

export default SPARoot;
