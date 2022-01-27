import { BaseController } from "../BaseController";
import { ControllerActionMap, IControllerInputs } from "../types";

function Get(target: any, propertyKey: string, descriptor: any): any {
  return descriptor;
}

// (data: IControllerInputs) => DomainResponse

export default class LoginController {
  @Get
  submit(data: IControllerInputs): void {}
}
