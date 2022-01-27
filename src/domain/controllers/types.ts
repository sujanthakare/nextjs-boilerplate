export interface DomainResponse {
  screen: string;
  controller?: string;
  routePath?: string[];
}

export interface IHandlerInputs<T = {}> {
  method: string;
  controller: string;
  path: string[];
  body?: T;
  query?: Record<string, string>;
}

export type IRouteHandler = (data: IHandlerInputs) => DomainResponse;

export type IControllerInputs = Pick<
  IHandlerInputs,
  "method" | "body" | "path" | "query"
>;

export type IControllerAction = (data: IControllerInputs) => DomainResponse;
export type ControllerActionMap = Record<string, IControllerAction>;
