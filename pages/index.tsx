import type { NextPage } from "next";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownOption,
  IDropdownStyles,
  PrimaryButton,
  ThemeProvider,
} from "@fluentui/react";

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const options: IDropdownOption[] = [
  {
    key: "fruitsHeader",
    text: "Fruits",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "apple", text: "Apple" },
  { key: "banana", text: "Banana" },
  { key: "orange", text: "Orange", disabled: true },
  { key: "grape", text: "Grape" },
  { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
  {
    key: "vegetablesHeader",
    text: "Vegetables",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "broccoli", text: "Broccoli" },
  { key: "carrot", text: "Carrot" },
  { key: "lettuce", text: "Lettuce" },
];

const Home: NextPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ThemeProvider>
        <PrimaryButton text="Primary" />
        <Dropdown
          placeholder="Select an option"
          label="Basic uncontrolled example"
          options={options}
          styles={dropdownStyles}
        />
      </ThemeProvider>
    </div>
  );
};

export default Home;
