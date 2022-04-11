import { useCallback, useState } from "react";
import { IViewSource } from "../types";

const useViewData = <T>(viewSource: IViewSource) => {
  const [view, setView] = useState<T>();

  const loadView = useCallback(() => {
    if (viewSource.view) {
      setView(viewSource.view as unknown as T);
    } else if (viewSource.dataConfig) {
      const { method, url } = viewSource.dataConfig;
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

export default useViewData;
