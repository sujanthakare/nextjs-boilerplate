import React from "react";
import { IRow } from "@/flex-ui/types";
import Swiper from "@/react-ui/swiper/swiper";

interface IProps {
  data: IRow;
}

const DummyBox = () => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: 130,
        margin: "3rem 0.5rem",
        borderRadius: 9,
        backgroundColor: "white",
        boxShadow: `1px 1px 9px 0px #ccc`,
      }}
    >
      <img
        alt="symptom"
        height="54"
        width="54"
        src="https://appresources.kry.se/icons/picto/picto_acne.png"
      />
      <p css={{ marginTop: 10 }}>Acne</p>
    </div>
  );
};

const Row = (props: IProps) => {
  return (
    <Swiper
      options={{ desktop: 7, phone: 3.1, tab: 3.1 }}
      offset={{ left: "1rem", right: "1rem" }}
    >
      <DummyBox />
      <DummyBox />
      <DummyBox />
      <DummyBox />
      <DummyBox />
    </Swiper>
  );
};

export default Row;
