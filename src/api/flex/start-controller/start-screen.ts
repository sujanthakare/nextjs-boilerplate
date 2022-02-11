import { IScreen, ViewType } from "@/flex-ui/types";

const buildStartScreen = async (): Promise<IScreen> => {
  return {
    screeName: "Login",
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
            id: "submit-button",
            type: "button",
            text: "Start payment",
          },
        ],
      },
    ],
  };
};

export default buildStartScreen;
