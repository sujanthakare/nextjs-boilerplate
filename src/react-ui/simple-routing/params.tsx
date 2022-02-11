import React, { useContext, useState, useEffect } from "react";

interface IParamsContext {
  params: Record<string, string>;
}

const ParamsContext = React.createContext({} as IParamsContext);

interface IProps {
  params: Record<string, string>;
}

export const ParamsContextProvider: React.FC<IProps> = ({
  params: incomingParams,
  children,
}) => {
  const [params, setParams] = useState(incomingParams);

  useEffect(() => {
    setParams(incomingParams);
  }, [incomingParams]);

  return (
    <ParamsContext.Provider value={{ params }}>
      {children}
    </ParamsContext.Provider>
  );
};

export const useParams = () => {
  const { params } = useContext(ParamsContext);
  return params;
};
