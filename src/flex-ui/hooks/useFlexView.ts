import { useCallback, useState } from "react";
import { IViewSource } from "../types";

const useFlexView = <T>(viewSource: IViewSource) => {
  const [view, setView] = useState<T>();

  const loadView = useCallback(() => {
    if (viewSource.view) {
      setView(viewSource.view as unknown as T);
    } else if (viewSource.serverConfig) {
      const { method, url } = viewSource.serverConfig;
      fetch(url, { method })
        .then((res) => res.json())
        .then((data) => {
          setView(data);
        });
    }
  }, [viewSource]);

  return {
    view,
    loadView,
  };
};

export default useFlexView;
