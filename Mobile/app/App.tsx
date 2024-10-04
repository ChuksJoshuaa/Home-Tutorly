import { ContextProvider } from "@/contexts";
import BottomTabNavigation from "@/navigation/BottomTabNavigation";
import { NavigationProps } from "@/utils/interface";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NotifierWrapper } from "react-native-notifier";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator<NavigationProps>();

export default function App() {
  const [fontsLoaded] = useFonts({
    bold: require("@/assets/fonts/Poppins-Bold.ttf"),
    extrabold: require("@/assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("@/assets/fonts/Poppins-SemiBold.ttf"),
    medium: require("@/assets/fonts/Poppins-Medium.ttf"),
    regular: require("@/assets/fonts/Poppins-Regular.ttf"),
    light: require("@/assets/fonts/Poppins-Light.ttf"),
    circular: require("@/assets/fonts/circular-std-medium-500.ttf"),
    circularmedium: require("@/assets/fonts/Circular_Std_Medium_Italic.ttf"),
    circularbold: require("@/assets/fonts/CircularStd-Bold.ttf"),
    circularsemibold: require("@/assets/fonts/CircularStd-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ContextProvider>
        <SafeAreaProvider>
          <NotifierWrapper>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Bottom"
                  component={BottomTabNavigation}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </NotifierWrapper>
        </SafeAreaProvider>
      </ContextProvider>
    </GestureHandlerRootView>
  );
}
