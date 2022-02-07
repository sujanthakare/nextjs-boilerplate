import { useContext } from "react";
import { FormViewContext } from "@/flex-ui/contexts/form-view-context";
import ViewItem from "./view-item";

const FormView = () => {
  const formViewContext = useContext(FormViewContext);

  if (!formViewContext.view) {
    return null;
  }

  return (
    <div>
      {formViewContext.view.viewItems.map((viewItem) => (
        <ViewItem key={viewItem.id} />
      ))}
    </div>
  );
};

export default FormView;
