// import { IView, IViewSource } from "@/flex-ui/types";
// import React, { useEffect, useState } from "react";

// export interface IViewContext {
//   view?: IView;
// }

// export const ViewContext = React.createContext({} as IViewContext);

// interface IProps {
//   viewSource: IViewSource;
// }

// export const ViewContextProvider: React.FC<IProps> = ({
//   children,
//   viewSource,
// }) => {
//   const [view, setView] = useState<IView>();

//   useEffect(() => {
//     if (viewSource.view) {
//       setView(viewSource.view);
//     } else if (viewSource.serverConfig) {
//       const { method, url } = viewSource.serverConfig;
//       fetch(url, { method })
//         .then((res) => res.json())
//         .then((data) => {
//           setView(data);
//         });
//     }
//   }, [viewSource]);

//   return (
//     <ViewContext.Provider value={{ view }}>{children}</ViewContext.Provider>
//   );
// };
