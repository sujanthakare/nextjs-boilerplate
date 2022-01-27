import { FlexViewStyle } from "./flexStyles";

export type IItem = unknown;

export enum ViewType {
  SCREEN = "SCREEN",
}

export interface IView {
  type: ViewType;
}

export interface IScreen extends IView {
  type: ViewType.SCREEN;
  title?: string;
  screenName: string;
  items: IItem[];
  containerStyle?: FlexViewStyle;
}
