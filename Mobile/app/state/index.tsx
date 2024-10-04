import { SIZES } from "@/constants";
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
    height: SIZES.major,
    borderRadius: SIZES.large
  },
};

export const initialState: InitialProps = {
  searchTerm: "",
  result: {} as ResultProps,
  selectedFilters: null,
  hideFilters: false,
};
