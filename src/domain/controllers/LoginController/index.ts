import { BaseController } from "../BaseController";
import { ControllerActionMap } from "../types";

export default class LoginController extends BaseController {
  @Get
  name(): void {}

  GET_Actions: ControllerActionMap = {
    submit_register(data) {
      return {
        screen: "SUBMIT_REGISTER",
      };
    },

    register_screen() {
      return {
        screen: "REGISTER",
        action: {
          method: "GET",
          url: "/api/view/login/submit_register",
        },
      };
    },

    screen() {
      return {
        screen: "LOGIN",
        controller: "login",
        bottomAction: {
          method: "POST",
          url: "/api/view/login/submit",
        },
      };
    },
  }; // GET_actions

  POST_Actions: ControllerActionMap = {
    //
    submit() {
      return {
        screen: "SUBMIT_SUCCESS",
        bottomAction: {
          method: "GET",
          url: "/api/view/login/register_screen",
        },
      };
    },
  }; // POST_actions

  PUT_Actions: ControllerActionMap = {}; // PUT_Actions

  DELETE_Actions: ControllerActionMap = {}; // DELETE_Actions
}
