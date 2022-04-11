import React, { useEffect } from "react";
import useViewData from "../hooks/useViewData";
import { IView, IViewSource } from "../types";

export interface IViewContext {
  view?: IView;
}

export const ViewContext = React.createContext({} as IViewContext);

interface IProps {
  viewSource: IViewSource;
}

export const ViewContextProvider: React.FC<IProps> = ({
  children,
  viewSource,
}) => {
  const { view, loadView } = useViewData<IView>(viewSource);

  useEffect(() => {
    loadView();
  }, [loadView]);

  return (
    <ViewContext.Provider value={{ view }}>{children}</ViewContext.Provider>
  );
};
