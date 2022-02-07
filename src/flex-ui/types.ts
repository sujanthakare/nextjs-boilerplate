import { FlexViewStyle } from "./flex-styles";

export interface ISource {
  serverConfig?: {
    method: string;
    url: string;
  };
}
export interface IBaseView {
  id: string;
  type: ViewType;
  viewStyle?: FlexViewStyle;
}

export enum ViewType {
  FORM = "FORM",
  SEARCH = "SEARCH",
}

interface IBaseField {
  id: string;
  type: string;
}

interface ITextField extends IBaseField {
  type: "text_field";
}

interface IButton extends IBaseField {
  type: "button";
}

type ViewItem = ITextField | IButton;

export interface IFormView extends IBaseView {
  type: ViewType.FORM;
  viewItems: ViewItem[];
}

export type IView = IFormView;

export interface IScreen {
  screeName: string;
  views: IView[];
}

export interface IScreenSource extends ISource {
  screen?: IScreen;
}
export interface IViewSource extends ISource {
  view?: IView;
}
