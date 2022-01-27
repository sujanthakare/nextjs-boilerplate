import "reflect-metadata";
import { IRouteHandler } from "./controllers/types";
import { getController } from "./controllers/routes";

export const routeHandler: IRouteHandler = (handlerArgs) => {
  const { controller, method, path, body, query } = handlerArgs;

  const routeController = getController(controller);

  if (!routeController) {
    return {
      screen: "PAGE NOT FOUND",
      controller,
    };
  }

  return routeController.handleRoute({ method, path, body, query });
};
