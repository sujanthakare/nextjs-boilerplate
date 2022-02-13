import { IScreen, ViewType } from "@/flex-ui/types";

const buildLoginScreen = async (): Promise<IScreen> => {
  return {
    id: "login-screen",
    views: [
      {
        id: "login-form",
        type: ViewType.FORM,
        containerStyles: { maxWidth: "xs" },
        gridStyles: {
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          spacing: 2,
        },
        viewItems: [
          {
            id: "username",
            type: "text_field",
            label: "Username",
            name: "username",
          },
          {
            id: "password",
            type: "text_field",
            label: "Password",
            name: "password",
            inputType: "password",
          },
          {
            id: "confirm-password",
            type: "text_field",
            label: "Confirm Password",
            name: "confirmPassword",
            inputType: "password",
          },
          {
            id: "submit-button",
            type: "button",
            text: "Login",
            color: "error",
            action: {
              type: "navigate",
              location: "/start",
            },
          },
        ],
      },
    ],
  };
};

export default buildLoginScreen;
