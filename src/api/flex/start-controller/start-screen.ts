import { IScreen, IScreenHeader, ViewType } from "@/flex-ui/types";

const buildStartScreen = async (): Promise<IScreen> => {
  const header: IScreenHeader = {
    title: "Mega Mall",
    rightViewItems: [
      {
        type: "icon_button",
        id: "notifications",
        name: "fi-rr-bell",
        action: {
          location: "/login",
          type: "navigate",
        },
      },
      {
        type: "icon_button",
        id: "shopping-cart",
        name: "fi-rr-shopping-cart",
        action: {
          location: "/login",
          type: "navigate",
        },
      },
    ],
  };

  const screen: IScreen = {
    id: "start-screen",
    type: "SCREEN",
    name: "START_SCREEN",
    header,
    view: {
      id: "search-view",
      type: ViewType.FLUENT,
      viewItems: [
        {
          type: "text_field",
          id: "search-field",
          name: "search",
          placeholder: "Search product name",
          maxWidth: "sm",
        },
        {
          id: "row",
          type: "row",
          items: [
            {
              type: "text_field",
              id: "row-field-1",
              name: "search",
              placeholder: "Search product name",
            },
            {
              type: "text_field",
              id: "row-field-2",
              name: "search",
              placeholder: "Search product name",
            },
            {
              type: "text_field",
              id: "row-field-3",
              name: "search",
              placeholder: "Search product name",
            },
          ],
        },
      ],
    },
  };

  return screen;
};

export default buildStartScreen;
