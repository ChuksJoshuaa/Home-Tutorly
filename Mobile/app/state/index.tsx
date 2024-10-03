import { SIZES } from "@/constants";

export const screenOptions = {
  tabBarShowLabel: true,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xxSmall,
    left: SIZES.xxSmall,
    height: SIZES.major,
    borderRadius: SIZES.large
  },
};
