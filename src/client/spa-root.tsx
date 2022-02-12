import React from "react";
import dynamic from "next/dynamic";
import { ThemeContextProvider } from "@/react-ui/theme";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FlexRoute, FlexRouterProvider } from "@/react-ui/simple-routing";

const Login = dynamic(() => import("./routes/login"));
const Start = dynamic(() => import("./routes/start"));
const NotFound = dynamic(() => import("./routes/not-found"));
const Home = dynamic(() => import("./routes/home"));

const SPARoot = () => {
  const router = useRouter();
  const { asPath } = router;

  if (asPath === "/[...routes]") {
    return null;
  }

  return (
    <ThemeContextProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={asPath}
      >
        <FlexRouterProvider location={router.asPath}>
          <FlexRoute path="/" element={<Home />} />
          <FlexRoute path="/login" element={<Login />} />
          <FlexRoute path="/start/:id?" element={<Start />} />
          <FlexRoute path="/:rest*" element={<NotFound />} />
        </FlexRouterProvider>
      </motion.div>
    </ThemeContextProvider>
  );
};

export default SPARoot;
