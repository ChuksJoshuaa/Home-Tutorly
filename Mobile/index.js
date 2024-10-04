import { registerRootComponent } from "expo";
import { AppRegistry, TextInput, Text } from "react-native";
import { name as appName } from "./app.json";
import App from "./app/App";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.maxFontSizeMultiplier = 1.12;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.maxFontSizeMultiplier = 1.12;

AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);
