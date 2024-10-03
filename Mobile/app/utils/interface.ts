export type NavigationProps = {
  Home: undefined;
  Bottom: undefined;
};

export type ChildrenProps = {
  children: React.ReactNode;
};


export interface ScreenOptionsProps {
  tabBarShowLabel: boolean;
  tabBarHideOnKeyboard: boolean;
  headerShown: boolean;
  tabBarStyle: {
    position: "absolute";
    bottom: number;
    right: number;
    left: number;
    height: number;
  };
}