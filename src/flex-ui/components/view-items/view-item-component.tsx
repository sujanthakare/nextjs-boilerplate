import { IViewItem, ViewItemType } from "@/flex-ui/types";
import Button from "./button";
import IconButton from "./icon-button";
import Row from "./row";
import Text from "./text";
import TextField from "./text-field";

const ComponentMap: Record<ViewItemType, (props: any) => JSX.Element | null> = {
  text_field: TextField,
  button: Button,
  text: Text,
  icon_button: IconButton,
  row: Row,
};

const ViewItemComponent = (props: { data: IViewItem }) => {
  const Component = ComponentMap[props.data.type];
  if (Component) {
    return <Component data={props.data as never} />;
  }

  if (process.env.NODE_ENV !== "production") {
    return <div>Component Not Found</div>;
  }

  return null;
};

export default ViewItemComponent;
