import BaseApiController from "../BaseApiController";
import { CONTROLLER } from "../decorators";
import LoginController from "./LoginController";

export default class ViewController extends BaseApiController {
  apiRouteKey: string = "view";

  login = CONTROLLER(async (data) => {
    const loginController = new LoginController();
    return await loginController.handleRoute(data);
  });
}
