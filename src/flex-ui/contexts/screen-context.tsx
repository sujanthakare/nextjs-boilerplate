import { IScreen, IScreenSource } from "@/flex-ui/types";
import React, { useEffect, useState } from "react";

export interface IScreenContext {
  screen?: IScreen;
}

export const ScreenContext = React.createContext({} as IScreenContext);

interface IProps {
  screenSource: IScreenSource;
}

const ScreenContextProvider: React.FC<IProps> = ({
  children,
  screenSource,
}) => {
  const [screen, setScreen] = useState<IScreen>();

  useEffect(() => {
    if (screenSource.screen) {
      setScreen(screenSource.screen);
    } else if (screenSource.serverConfig) {
      const { method, url } = screenSource.serverConfig;

      fetch(url, { method })
        .then((res) => res.json())
        .then((data) => {
          setScreen(data);
        });
    }
  }, [screenSource]);

  return (
    <ScreenContext.Provider value={{ screen }}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenContextProvider;
