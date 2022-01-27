import { BaseController } from "./BaseController";
import LoginController from "./LoginController";

enum RoutePath {
  LOGIN = "login",
}

/**
 *
 * HELPERS
 *
 */

export const getController = (name: string): BaseController | null => {
  switch (name) {
    case RoutePath.LOGIN:
      return new LoginController();
    default:
      return null;
  }
};
