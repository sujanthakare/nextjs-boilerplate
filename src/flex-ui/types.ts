import { CSSObject } from "@emotion/react";
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
  margin?: number;
};

type ContainerStyles = FlexViewStyle & {};

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

interface IBaseViewItem {
  id: string;
  type: string;
  flexSize?: 2 | 6 | 8 | 16;
}

export interface IRow extends IBaseViewItem {
  type: "row";
}

export interface ITextField extends IBaseViewItem {
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

export interface IButton extends IBaseViewItem {
  type: "button";
  text: string;
  href?: string;
  color?: string;
  action?: Action;
}

export interface IIconButton extends IBaseViewItem {
  type: "icon_button";
  name: string;
  color?: string;
  action?: Action;
}

export type TextVariant = "header" | "para" | "markdown";
export interface IText extends IBaseViewItem {
  type: "text";
  text: string;
  variant: TextVariant;
}

export type IViewItem = ITextField | IButton | IText | IIconButton | IRow;

export interface IDisplayConfig {
  id: string;
  type: string;
  gridStyles?: GridStyles;
  containerStyles?: CSSObject;
  enableGutters?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

export enum ViewType {
  FORM = "FORM",
  SIMPLE = "SIMPLE",
  SEARCH = "SEARCH",
}

interface IBaseView extends IDisplayConfig {
  type: ViewType;
}

export interface IFormView extends IBaseView {
  type: ViewType.FORM;
  viewItems: IViewItem[];
}

export interface ISimpleView extends IBaseView {
  type: ViewType.SIMPLE;
  viewItems: IViewItem[];
}

export type IView = IFormView | ISimpleView;

export interface IScreenHeader {
  title: string;
  rightArea?: IView;
  leftArea?: IView;
}
export interface IScreen extends IDisplayConfig {
  type: "SCREEN";
  name: string;
  header?: IScreenHeader;
  views: IView[];
}

export interface IScreenSource extends ISource {
  screen?: IScreen;
}
export interface IViewSource extends ISource {
  view?: IView;
}
