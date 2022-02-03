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
        <Button variant="outlined">Primary</Button>
      </div>
      <div css={{ margin: 10 }}>
        <Button title="Standard"></Button>
      </div>
    </div>
  );
};

export default Home;
