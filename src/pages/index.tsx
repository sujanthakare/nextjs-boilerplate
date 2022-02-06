import type { NextPage } from "next";

import Button from "../react-ui/button";

const Home: NextPage = () => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        margin: 10,
        "> button": {
          margin: 10,
        },
      }}
    >
      <Button title="Sign up" />
      <Button title="Sign in" variant="outlined" />
      <Button title="Forgot password" />
      <Button title="Error" color="error" />
      <Button title="Forgot password" />
    </div>
  );
};

export default Home;
