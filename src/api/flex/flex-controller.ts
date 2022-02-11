import BaseApiController from "../base-api-controller";
import { CONTROLLER } from "../decorators";
import LoginController from "./login-controller";
import StartController from "./start-controller";

export default class ViewController extends BaseApiController {
  apiRouteKey: string = "flex";

  login = CONTROLLER(async (data) => {
    const loginController = new LoginController();
    return await loginController.handleRoute(data);
  });

  start = CONTROLLER(async (data) => {
    const startController = new StartController();
    return await startController.handleRoute(data);
  });
}
