import { IScreen, IScreenHeader, ViewType } from "@/flex-ui/types";

const buildStartScreen = async (): Promise<IScreen> => {
  const header: IScreenHeader = {
    title: "Mega Mall",
    rightArea: {
      id: "header-right-area",
      type: ViewType.SIMPLE,
      gridStyles: {
        flexDirection: "row",
        justifyContent: "flex-end",
        spacing: 1,
      },
      viewItems: [
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
    },
  };

  const screen: IScreen = {
    id: "start-screen",
    type: "SCREEN",
    name: "START_SCREEN",
    enableGutters: true,
    gridStyles: { flexDirection: "column" },
    header,
    views: [
      {
        id: "search-view",
        type: ViewType.SIMPLE,
        maxWidth: "md",
        gridStyles: {
          justifyContent: "center",
          flexDirection: "row",
          margin: 1,
          spacing: 2,
        },

        viewItems: [
          {
            type: "text_field",
            id: "search-field",
            name: "search",
            placeholder: "Search product name",
          },
        ],
      },
    ],
  };

  return screen;
};

export default buildStartScreen;
