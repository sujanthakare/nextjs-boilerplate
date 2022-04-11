import { IView, ViewType } from "@/flex-ui/types";
import { motion } from "framer-motion";
import { ViewContextProvider } from "../contexts/view-context";
import FluentView from "./fluent-view";

interface IProps {
  view?: IView;
}

const View = ({ view }: IProps) => {
  if (!view) {
    return null;
  }

  const renderView = () => {
    switch (view.type) {
      case ViewType.FLUENT:
        return (
          <ViewContextProvider viewSource={{ view }}>
            <FluentView />
          </ViewContextProvider>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={view.id}>
      {renderView()}
    </motion.div>
  );
};

export default View;
