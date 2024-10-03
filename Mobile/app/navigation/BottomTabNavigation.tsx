import { COLORS } from "@/constants/index";
import {
    AntDesign
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/HomeScreen";
import { screenOptions } from "@/state/index";
import { NavigationProps, ScreenOptionsProps } from "@/utils/interface";
import { Text } from "react-native";
const Tab = createBottomTabNavigator<NavigationProps>();


const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions as ScreenOptionsProps}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                className="font-normal text-[14px] leading-[20px] tracking-[0.42px]"
                style={{ color: `${focused ? COLORS.red : COLORS.gray}` }}
              >
                Home
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="home"
                size={24}
                color={focused ? COLORS.red : COLORS.gray}
              />
            );
          },
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
