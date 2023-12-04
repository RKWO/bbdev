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

externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>This is my signup screen.</Text>
    </View>
));
