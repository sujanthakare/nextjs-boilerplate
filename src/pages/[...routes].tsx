import type { NextPage, NextPageContext } from "next";
import dynamic from "next/dynamic";

const SPARoot = dynamic(() => import("@/client/spa-root"));

const Root: NextPage = () => {
  return <SPARoot />;
};

export default Root;
