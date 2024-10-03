export type NavigationProps = {
  Home: undefined;
  Contact: undefined;
  Bottom: undefined;
  Profile: undefined;
  Default: undefined
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
export interface TabIconProps {
  type: string;
  name: 'dollar-sign' | 'home-alert' | 'dots-three-horizontal' | 'bar-chart-2'
}
export interface TabDetailProps {
  name: keyof NavigationProps; 
  component: () => React.JSX.Element;
  icon: TabIconProps;
}


