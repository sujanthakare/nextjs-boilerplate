import BaseApiController from "../base-api-controller";
import { CONTROLLER } from "../decorators";
import LoginController from "./login-controller";

export default class ViewController extends BaseApiController {
  apiRouteKey: string = "view";

  login = CONTROLLER(async (data) => {
    const loginController = new LoginController();
    return await loginController.handleRoute(data);
  });
}
