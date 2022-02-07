import { FormViewContextProvider } from "@/flex-ui/contexts/form-view-context";
import { IView, ViewType } from "@/flex-ui/types";
import FormView from "./form-view";

interface IProps {
  view: IView;
}

const View = ({ view }: IProps) => {
  if (!view) {
    return null;
  }

  switch (view.type) {
    case ViewType.FORM:
      return (
        <FormViewContextProvider viewSource={{ view }}>
          <FormView />
        </FormViewContextProvider>
      );
    default:
      return null;
  }
};

export default View;
