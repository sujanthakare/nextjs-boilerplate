import React, { useEffect } from "react";
import useFlexView from "../hooks/useFlexView";
import { ISimpleView, IViewSource } from "../types";

export interface ISimpleViewContext {
  view?: ISimpleView;
}

export const SimpleViewContext = React.createContext({} as ISimpleViewContext);

interface IProps {
  viewSource: IViewSource;
}

export const SimpleViewContextProvider: React.FC<IProps> = ({
  children,
  viewSource,
}) => {
  const { view, loadView } = useFlexView<ISimpleView>(viewSource);

  useEffect(() => {
    loadView();
  }, [loadView]);

  return (
    <SimpleViewContext.Provider value={{ view }}>
      {children}
    </SimpleViewContext.Provider>
  );
};
