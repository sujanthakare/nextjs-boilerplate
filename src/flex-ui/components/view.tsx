import { FormViewContextProvider } from "@/flex-ui/contexts/form-view-context";
import { IView, ViewType } from "@/flex-ui/types";
import { Container, css } from "@mui/material";
import { motion } from "framer-motion";
import { SimpleViewContextProvider } from "../contexts/simple-view-context";
import FormView from "./form-view";
import SimpleView from "./simple-view";

interface IProps {
  view?: IView;
}

const View = ({ view }: IProps) => {
  if (!view) {
    return null;
  }

  const renderView = () => {
    switch (view.type) {
      case ViewType.FORM:
        return (
          <FormViewContextProvider viewSource={{ view }}>
            <FormView />
          </FormViewContextProvider>
        );

      case ViewType.SIMPLE:
        return (
          <SimpleViewContextProvider viewSource={{ view }}>
            <SimpleView />
          </SimpleViewContextProvider>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={view.id}>
      <Container
        disableGutters={!view.enableGutters}
        maxWidth={view.maxWidth || "sm"}
        css={css(view.containerStyles)}
      >
        {renderView()}
      </Container>
    </motion.div>
  );
};

export default View;
