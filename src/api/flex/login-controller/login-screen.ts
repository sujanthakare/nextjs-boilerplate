import { IScreen, ViewType } from "@/flex-ui/types";

const buildLoginScreen = async (): Promise<IScreen> => {
  return {
    id: "login-screen",
    type: "SCREEN",
    name: "LOGIN_SCREEN",
    view: {
      id: "login-form",
      type: ViewType.FLUENT,
      viewItems: [
        {
          id: "username",
          type: "text_field",
          label: "Username",
          name: "username",
          maxWidth: "sm",
        },
        {
          id: "password",
          type: "text_field",
          label: "Password",
          name: "password",
          inputType: "password",
          maxWidth: "sm",
        },
        {
          id: "confirm-password",
          type: "text_field",
          label: "Confirm Password",
          name: "confirmPassword",
          inputType: "password",
          maxWidth: "sm",
        },
        {
          id: "submit-button",
          type: "button",
          text: "Login",
          color: "error",
          maxWidth: "sm",
          action: {
            type: "navigate",
            location: "/start",
          },
        },
      ],
    },
  };
};

export default buildLoginScreen;
