import type { NextPage } from "next";

import Button from "../react-ui/button";

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 10,
      }}
    >
      <div css={{ margin: 10 }}>
        <Button>Primary</Button>
      </div>
      <div css={{ margin: 10 }}>
        <Button>Standard</Button>
      </div>
    </div>
  );
};

export default Home;
