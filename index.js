import React from "react";
import {NativeModules} from "react-native";
import CustomBuddyScreen from "./custom_code/CustomBuddyScreen";
const {RNCustomCode} = NativeModules;
 
export const applyCustomCode = externalCodeSetup => {
  externalCodeSetup.navigationApi.addNavigationRoute(
"customScreen",
"CustomBuddyScreen",
CustomBuddyScreen,
"Main" // "Auth" | "noAuth" | "Main" | "All"
  );
};
