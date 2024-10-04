import TabStyles from "@/assets/styles/tab.styles";
import { getTabIcon, TabDetails } from "@/components/Tab";
import { screenOptions } from "@/state/index";
import {
  NavigationProps,
  ScreenOptionsProps,
  TabDetailProps,
} from "@/utils/interface";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator<NavigationProps>();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions as ScreenOptionsProps}>
      {TabDetails?.map((tab: TabDetailProps, index: number) => (
        <Tab.Screen
          key={index}
          name={tab.name as keyof NavigationProps}
          component={tab.component}
          options={{
            tabBarLabel: ({ focused }) => (
              <View
                style={focused ? TabStyles.focusedTab : TabStyles.unIcon}
              >
                {getTabIcon(tab, focused)}
                {focused && (
                  <Text style={TabStyles.focusedText}>{tab.name}</Text>
                )}
              </View>
            ),
            tabBarIcon: () => null,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
