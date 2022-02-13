import BaseApiController from "@/api/base-api-controller";
import { DomainResponse } from "@/api/types";
import { IScreen } from "@/flex-ui/types";
import buildStartScreen from "./start-screen";

export default class StartController extends BaseApiController {
  apiRouteKey: string = "login";

  async get(): Promise<DomainResponse<IScreen>> {
    return {
      status: 200,
      data: await buildStartScreen(),
    };
  }
}
