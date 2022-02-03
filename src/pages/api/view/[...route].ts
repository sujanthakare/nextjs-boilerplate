import { createHandler } from "@/domain/api";
import ViewController from "@/domain/api/view/view-controller";

export default createHandler(new ViewController());
