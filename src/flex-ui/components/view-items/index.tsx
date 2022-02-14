import { IViewItem, ViewItemType } from "@/flex-ui/types";
import Button from "./button";
import IconButton from "./icon-button";
import Text from "./text";
import TextField from "./text-field";
import Row from "./row";

interface IProps {
  data: IViewItem;
}

const ComponentMap: Record<ViewItemType, (props: any) => JSX.Element | null> = {
  text_field: TextField,
  button: Button,
  text: Text,
  icon_button: IconButton,
  row: Row,
};

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
