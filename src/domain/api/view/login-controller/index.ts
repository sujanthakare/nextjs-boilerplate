import BaseApiController from "@/domain/api/base-api-controller";
import { GET, POST } from "@/domain/api/decorators";

export default class LoginController extends BaseApiController {
  apiRouteKey: string = "login";

  async get() {
    return {
      status: 200,
      data: {
        message: "login-get",
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

  submit = POST(async () => {
    return {
      status: 200,
      data: {
        post: "SUCCESS",
      },
    };
  });

  submit_decorator = GET(async (data) => {
    return {
      status: 200,
      data: {
        success: "HELLO THERE",
      },
    };
  });
}
