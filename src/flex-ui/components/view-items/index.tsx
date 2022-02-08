import { IViewItem } from "@/flex-ui/types";
import Button from "./button";
import TextField from "./text-field";

const ComponentMap = {
  text_field: TextField,
  button: Button,
};

interface IProps {
  data: IViewItem;
}

const ViewItem = ({ data }: IProps) => {
  const { type } = data;

  const ViewItemComponent = ComponentMap[type];

  if (ViewItemComponent) {
    return <ViewItemComponent data={data as never} />;
  }

  if (process.env.NODE_ENV !== "production") {
    return <div>Component Not Found</div>;
  }

  return null;
};

export default ViewItem;
