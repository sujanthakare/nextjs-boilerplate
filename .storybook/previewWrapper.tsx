import React, { Fragment } from "react";
import GlobalStyles from "../src/react-ui/globalStyles";

const PreviewWrapper: React.FC = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyles />
      {children}
    </Fragment>
  );
};

export default PreviewWrapper;
