import React, { useEffect, useState } from "react";
import { IFormView, IViewSource } from "../types";

export interface IFormViewContext {
  view?: IFormView;
}

export const FormViewContext = React.createContext({} as IFormViewContext);

interface IProps {
  viewSource: IViewSource;
}

export const FormViewContextProvider: React.FC<IProps> = ({
  children,
  viewSource,
}) => {
  const [view, setView] = useState<IFormView>();

  useEffect(() => {
    if (viewSource.view) {
      setView(viewSource.view);
    } else if (viewSource.serverConfig) {
      const { method, url } = viewSource.serverConfig;
      fetch(url, { method })
        .then((res) => res.json())
        .then((data) => {
          setView(data);
        });
    }
  }, [viewSource]);

  return (
    <FormViewContext.Provider value={{ view }}>
      {children}
    </FormViewContext.Provider>
  );
};
