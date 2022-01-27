import {
  ControllerActionMap,
  DomainResponse,
  IControllerInputs,
} from "./types";

export abstract class BaseController {
  abstract GET_Actions: ControllerActionMap;
  abstract POST_Actions: ControllerActionMap;
  abstract PUT_Actions: ControllerActionMap;
  abstract DELETE_Actions: ControllerActionMap;

  handleRoute(data: IControllerInputs): DomainResponse {
    const { method, path, query, body } = data;
    const [action, ...rest] = path;

    let actionHandler;

    switch (method) {
      case "GET":
        actionHandler = this.GET_Actions[action];
        break;
      case "POST":
        actionHandler = this.POST_Actions[action];
        break;
      case "PUT":
        actionHandler = this.PUT_Actions[action];
        break;
      case "DELETE":
        actionHandler = this.DELETE_Actions[action];
        break;
      default:
        break;
    }

    if (!actionHandler) {
      return {
        screen: "ACTION NOT FOUND",
      };
    }

    return actionHandler({ method, path: rest, query, body });
  }
}
