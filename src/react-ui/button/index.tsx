import React from "react";
import classBuilder from "clsx";

const Button = () => {
  return (
    <button
      className={classBuilder([
        "relative",
        "cursor-pointer",
        "h-[32px]",
        "min-w-[80px]",
        "text-[13px]",
        "bg-primary-800",
        "text-white",
        "inline-block",
        "font-open-sans",
        "rounded-sm",
        "font-medium",
        "hover:bg-primary-700",
        "px-5",
      ])}
      onClick={() => {
        alert("yo");
      }}
    >
      Primary
    </button>
  );
};

export default Button;
