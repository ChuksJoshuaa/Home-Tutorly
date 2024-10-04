import {
    ADDFILTERS,
    HIDEICONS,
    SEARCHTERM
} from "@/constants/actionTypes";
import { AppAction, InitialProps } from "@/utils/interface";


export const ContextReducers = (state: InitialProps, action: AppAction) => {
  switch (action.type) {
    case SEARCHTERM:
      return { ...state, searchTerm: action.payload };
    case HIDEICONS:
      return { ...state, hideFilters: action.payload };
    case ADDFILTERS:
        const newFilters = { ...state.selectedFilters };
        const filterId = action.payload.id
        if (newFilters[filterId]) {
            delete newFilters[filterId];
        } else {
            newFilters[filterId] = action.payload;
        }
        return { ...state, selectedFilters: newFilters };
    default:
      return { ...state };
  }
};
