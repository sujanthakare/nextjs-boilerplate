import { FlexViewStyle } from "./flex-styles";

export interface ISource {
  serverConfig?: {
    method: string;
    url: string;
  };
}

type GridStyles = {
  flexDirection?: FlexViewStyle["flexDirection"];
  spacing?: number;
  justifyContent?: FlexViewStyle["justifyContent"];
  alignItems?: FlexViewStyle["alignItems"];
  height?: FlexViewStyle["height"];
  maxHeight?: FlexViewStyle["maxHeight"];
  maxWidth?: FlexViewStyle["maxWidth"];
  width?: FlexViewStyle["width"];
};

type ContainerStyles = {
  height?: string | number;
  maxWidth?: "xs";
};

export interface IBaseView {
  id: string;
  type: ViewType;
  gridStyles?: GridStyles;
  containerStyles?: ContainerStyles;
}

export enum ViewType {
  FORM = "FORM",
  SEARCH = "SEARCH",
}

interface IBaseViewItem {
  id: string;
  type: string;
}

export interface ITextField extends IBaseViewItem {
  type: "text_field";
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  inputType?: string;
}

export type Action = {
  type: "navigate";
  location: string;
};

export interface IButton extends IBaseViewItem {
  type: "button";
  text: string;
  href?: string;
  color?: string;
  action?: Action;
}

export type IViewItem = ITextField | IButton;

export interface IFormView extends IBaseView {
  type: ViewType.FORM;
  viewItems: IViewItem[];
}

export type IView = IFormView;

export interface IScreen {
  screeName: string;
  views: IView[];
  gridStyles?: GridStyles;
  containerStyles?: ContainerStyles;
}

export interface IScreenSource extends ISource {
  screen?: IScreen;
}
export interface IViewSource extends ISource {
  view?: IView;
}
