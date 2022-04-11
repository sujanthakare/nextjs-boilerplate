import { FlexViewStyle } from "./flex-styles";

export interface ISource {
  dataConfig?: {
    method: string;
    url: string;
  };
}

// type GridStyles = {
//   flexDirection?: FlexViewStyle["flexDirection"];
//   spacing?: number;
//   justifyContent?: FlexViewStyle["justifyContent"];
//   alignItems?: FlexViewStyle["alignItems"];
//   height?: FlexViewStyle["height"];
//   maxHeight?: FlexViewStyle["maxHeight"];
//   maxWidth?: FlexViewStyle["maxWidth"];
//   width?: FlexViewStyle["width"];
//   margin?: number;
// };

/**
 *
 * VIEW_ITEMS
 */

export type ViewItemType =
  | "button"
  | "text_field"
  | "text"
  | "icon_button"
  | "row";

export interface ITextField extends IDisplayConfig {
  type: "text_field";
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  inputType?: string;
}

export type Action = {
  type: "navigate";
  location: string;
};

export interface IButton extends IDisplayConfig {
  type: "button";
  text: string;
  href?: string;
  color?: string;
  action?: Action;
}

export interface IIconButton extends IDisplayConfig {
  type: "icon_button";
  name: string;
  color?: string;
  action?: Action;
}

export type TextVariant = "header" | "para" | "markdown";
export interface IText extends IDisplayConfig {
  type: "text";
  text: string;
  variant: TextVariant;
}

export interface IRow extends IDisplayConfig {
  type: "row";
  items: IViewItem[];
}

export type IViewItem = ITextField | IButton | IText | IIconButton | IRow;

export interface IDisplayConfig {
  id: string;
  type: string;
  // gridStyles?: GridStyles;
  // containerStyles?: CSSObject;
  // enableGutters?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

export enum ViewType {
  FLUENT = "FLUENT",
}

export interface IView extends IDisplayConfig {
  type: ViewType;
  viewItems: IViewItem[];
}

export interface IScreenHeader {
  title: string;
  rightViewItems?: IViewItem[];
  leftViewItems?: IViewItem[];
}

export interface IScreen extends IDisplayConfig {
  name: string; // LOGIN | HOME
  header?: IScreenHeader;
  view: IView;
}

export interface IScreenSource extends ISource {
  screen?: IScreen;
}
export interface IViewSource extends ISource {
  view?: IView;
}
