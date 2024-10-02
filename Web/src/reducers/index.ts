import {
    LOADING,
    OPENSIDEBAR,
    SEARCHDATA,
    SEARCHTERM,
    SETSCREEN
} from "@/constants/actionTypes";
import { AppAction, InitialProps } from "@/interface";

//All reducers functionalities
export const ContextReducers = (state: InitialProps, action: AppAction) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case SETSCREEN:
      return { ...state, screenSize: action.payload };
    case OPENSIDEBAR:
      return { ...state, isSidebarOpen: action.payload };
    case SEARCHDATA:
      return { ...state, searchData: action.payload };
    case SEARCHTERM:
      return { ...state, searchTerm: action.payload };
    default:
      return { ...state };
  }
};