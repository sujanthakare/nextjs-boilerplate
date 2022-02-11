import React from "react";
import { ThemeContextProvider } from "@/react-ui/theme";
import { useRouter } from "next/router";
import Login from "./routes/login";
import Start from "./routes/start";
import { motion } from "framer-motion";
import { FlexRoute, FlexRouterProvider } from "@/react-ui/simple-routing";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/login");
        }}
      >
        TO Login
      </button>
      <h1>HOME</h1>
    </div>
  );
};

const NotFound = () => {
  return <div>PAGE NOT FOUND</div>;
};

const SPARoot = () => {
  const router = useRouter();
  const { asPath, query } = router;

  if (asPath === "/[...routes]") {
    return null;
  }

  const renderRoutes = () => {
    return (
      <FlexRouterProvider location={router.asPath}>
        <FlexRoute path="/" element={<Home />} />
        <FlexRoute path="/login" element={<Login />} />
        <FlexRoute path="/start/:id?" element={<Start />} />
        <FlexRoute path="/:rest*" element={<NotFound />} />
      </FlexRouterProvider>
    );
  };

  return (
    <ThemeContextProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={asPath}
      >
        {renderRoutes()}
      </motion.div>
    </ThemeContextProvider>
  );
};

export default SPARoot;
