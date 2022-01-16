import React from "react";

const Button = () => {
  return (
    <button
      css={{
        backgroundColor: "blue",
      }}
      onClick={() => {
        alert("yo");
      }}
    >
      WATCBH THIS
    </button>
  );
};

export default Button;
