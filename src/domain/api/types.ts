export interface DomainResponse {
  status: number;
  data?: any;
}

export interface IHandlerInputs<T = {}> {
  method: string;
  controller: string;
  apiRoutes: string[];
  body?: T;
  query?: Record<string, string>;
}

export type IRouteHandler = (data: IHandlerInputs) => Promise<DomainResponse>;

export type IControllerInputs = Pick<
  IHandlerInputs,
  "method" | "body" | "apiRoutes" | "query"
>;

export type IControllerAction = (
  data: IControllerInputs
) => Promise<DomainResponse>;

export type ControllerActionMap = Record<string, IControllerAction>;
