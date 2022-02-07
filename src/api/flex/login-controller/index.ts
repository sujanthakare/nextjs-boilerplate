import BaseApiController from "@/api/base-api-controller";
import { GET } from "@/api/decorators";
import { DomainResponse } from "@/api/types";
import { IScreen, ViewType } from "@/flex-ui/types";

export default class LoginController extends BaseApiController {
  apiRouteKey: string = "login";

  async get(): Promise<DomainResponse<IScreen>> {
    return {
      status: 200,
      data: {
        screeName: "Login",
        views: [
          {
            id: "login-form",
            type: ViewType.FORM,
            viewItems: [
              {
                id: "username",
                type: "text_field",
              },
              {
                id: "password",
                type: "text_field",
              },
              {
                id: "submit-login",
                type: "button",
              },
            ],
          },
        ],
      },
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
