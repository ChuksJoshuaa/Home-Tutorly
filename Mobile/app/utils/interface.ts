import { StatusBarStyle } from "react-native";

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

export type CustomStatusProps = {
  barStyle?: StatusBarStyle | null | undefined;
  backgroundColor?: string;
  isLight?: boolean;
  isTransparent?: boolean;
}


import {
  ADDFILTERS,
  LOADING,
  OPENSIDEBAR,
  SEARCHDATA,
  SEARCHTERM,
  SETSCREEN,
  HIDEICONS,
} from "@/constants/actionTypes";

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface FormInputProps {
  type: string;
  label: string;
  name: string;
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputType: "input" | "textarea" | "select";
}

export type DataProps = {
  id: string;
  name: string;
  bio: string;
  isVerified: boolean;
  gender: string;
  rating: string;
  img?: string;
  years?: number;
  subject?: "Science" | "Maths" | "English" | "Physics" | "Art" | "Kids Expert";
};

export type ResultProps = {
  data: Array<DataProps>;
  count: number;
};

export interface NavProps {
  id: string;
  name: string;
  link: string;
}

export interface FiltersProps {
  id: string;
  name: string;
  isVerified?: boolean;
  isRating?: boolean;
  years?: number;
  img?: string;
  rating?: number;
  gender?: string;
  subjects?: string;
}
export interface InitialProps {
  searchTerm: string;
  result: ResultProps;
  selectedFilters: { [key: string]: FiltersProps } | null;
  hideFilters: boolean;
}

export type AppAction =
  | { type: typeof LOADING; payload: boolean }
  | { type: typeof OPENSIDEBAR; payload: boolean }
  | { type: typeof SETSCREEN; payload: number }
  | { type: typeof SEARCHTERM; payload: string }
  | { type: typeof SEARCHDATA; payload: Array<DataProps> }
  | { type: typeof ADDFILTERS; payload: FiltersProps }
  | { type: typeof HIDEICONS; payload: boolean };

