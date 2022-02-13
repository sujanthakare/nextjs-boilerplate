import BaseApiController from "@/api/base-api-controller";
import { GET } from "@/api/decorators";
import { DomainResponse } from "@/api/types";
import { IScreen } from "@/flex-ui/types";
import buildLoginScreen from "./login-screen";

export default class LoginController extends BaseApiController {
  apiRouteKey: string = "login";

  async get(): Promise<DomainResponse<IScreen>> {
    return {
      status: 200,
      data: await buildLoginScreen(),
    };
  }
}
