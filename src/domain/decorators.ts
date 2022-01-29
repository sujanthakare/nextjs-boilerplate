import { DomainResponse, IControllerInputs } from "./types";

export function GET(
  inputFn: (data: IControllerInputs) => Promise<DomainResponse>
) {
  (inputFn as any)._httpMethod = "GET";
  return inputFn;
}

export function POST(
  inputFn: (data: IControllerInputs) => Promise<DomainResponse>
) {
  (inputFn as any)._httpMethod = "POST";
  return inputFn;
}

export function CONTROLLER(
  inputFn: (data: IControllerInputs) => Promise<DomainResponse>
) {
  (inputFn as any)._httpMethod = "CONTROLLER";
  return inputFn;
}
