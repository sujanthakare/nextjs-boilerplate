import { DomainResponse, IControllerInputs } from "./types";

export default abstract class BaseApiController {
  abstract apiRouteKey: string;

  async get(data: IControllerInputs): Promise<DomainResponse> {
    return { status: 404 };
  }
  async post(data: IControllerInputs): Promise<DomainResponse> {
    return { status: 404 };
  }
  async patch(data: IControllerInputs): Promise<DomainResponse> {
    return { status: 404 };
  }
  async put(data: IControllerInputs): Promise<DomainResponse> {
    return { status: 404 };
  }
  async delete(data: IControllerInputs): Promise<DomainResponse> {
    return { status: 404 };
  }

  async handleRoute(data: IControllerInputs): Promise<DomainResponse> {
    const { method, apiRoutes, query, body } = data;
    const [actionName, ...nestedApiRoutes] = apiRoutes;

    const actionInputs: IControllerInputs = {
      method,
      apiRoutes: nestedApiRoutes,
      query,
      body,
    };

    if (!actionName) {
      const actionHandler = (this as any)[method.toLowerCase()];

      if (actionHandler) {
        const response = await actionHandler(actionInputs);
        return response;
      }

      return { status: 404 };
    }

    let actionHandler = (this as any)[actionName];

    if (actionHandler && actionHandler._httpMethod) {
      if (
        actionHandler._httpMethod === "CONTROLLER" ||
        actionHandler._httpMethod.toLowerCase() === method.toLowerCase()
      ) {
        return await actionHandler(actionInputs);
      }
    }

    return { status: 404 };
  }
}
