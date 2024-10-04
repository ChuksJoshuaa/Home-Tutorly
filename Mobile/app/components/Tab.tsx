import { COLORS, SIZES } from "@/constants";
import Contact from "@/screens/ContactScreen";
import Default from "@/screens/DefaultScreen";
import Home from "@/screens/HomeScreen";
import Profile from "@/screens/ProfileScreen";
import TabStyles from "@/styles/tab.styles";
import { TabDetailProps } from "@/utils/interface";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const TabDetails: TabDetailProps[] = [
  {
    name: "Home",
    component: Home,
    icon: {
      type: "material-community",
      name: "home-alert",
    },
  },
  {
    name: "Contact",
    component: Contact,
    icon: {
      type: "feather",
      name: "dollar-sign",
    },
  },
  {
    name: "Profile",
    component: Profile,
    icon: {
      type: "feather",
      name: "bar-chart-2",
    },
  },
  {
    name: "Default",
    component: Default,
    icon: {
      type: "Entypo",
      name: "dots-three-horizontal",
    },
  },
];

export const getTabIcon = (tab: TabDetailProps, focused: boolean) => {
  const IconComponent =
    tab.icon.type === "material-community"
      ? MaterialCommunityIcons
      : tab.icon.type === "Entypo"
      ? Entypo
      : Feather;

  return (
    <IconComponent
      name={tab.icon.name as any}
      size={focused ? SIZES.large : SIZES.medium}
      color={focused ? COLORS.crimson : COLORS.black}
      style={focused ? TabStyles.focusedIcon : TabStyles.unfocusedIcon}
    />
  );
};
