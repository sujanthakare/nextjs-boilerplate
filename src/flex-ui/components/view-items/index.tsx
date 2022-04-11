import { IViewItem } from "@/flex-ui/types";
import { Container } from "@mui/material";
import ViewItemComponent from "./view-item-component";

interface IProps {
  data: IViewItem;
}

const ViewItem = ({ data }: IProps) => {
  return (
    <Container maxWidth={data.maxWidth}>
      <ViewItemComponent data={data} />
    </Container>
  );
};

export default ViewItem;
