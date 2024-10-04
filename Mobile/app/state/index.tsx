import { SIZES } from "@/constants";
import { getPlatform } from "@/utils";
import { InitialProps, ResultProps } from "@/utils/interface";

export const screenOptions = {
  tabBarShowLabel: true,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xxSmall,
    left: SIZES.xxSmall,
    height: getPlatform(SIZES.major, SIZES.major + SIZES.xSmall),
    borderRadius: getPlatform(SIZES.large, SIZES.large + SIZES.xSmall)
  },
};

export const initialState: InitialProps = {
  searchTerm: "",
  result: {} as ResultProps,
  selectedFilters: null,
  hideFilters: false,
};
