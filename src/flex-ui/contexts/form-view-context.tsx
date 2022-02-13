import React, { useEffect } from "react";
import useFlexView from "../hooks/useFlexView";
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
  const { view, loadView } = useFlexView<IFormView>(viewSource);

  useEffect(() => {
    loadView;
  }, [loadView]);

  return (
    <FormViewContext.Provider value={{ view }}>
      {children}
    </FormViewContext.Provider>
  );
};
