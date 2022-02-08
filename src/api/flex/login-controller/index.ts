import BaseApiController from "@/api/base-api-controller";
import { GET } from "@/api/decorators";
import { DomainResponse } from "@/api/types";
import { IScreen } from "@/flex-ui/types";
import buildLoginScreen from "./login-screen-builder";

export default class LoginController extends BaseApiController {
  apiRouteKey: string = "login";

  async get(): Promise<DomainResponse<IScreen>> {
    return {
      status: 200,
      data: await buildLoginScreen(),
    };
  }

  screen = GET(async () => {
    return {
      status: 200,
      data: {
        screen: "SCREEN",
        items: [
          {
            type: "text_field",
          },
        ],
      },
    };
  });
}
