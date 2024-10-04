import SearchbarStyles from "@/assets/styles/searchbar.styles";
import { MediumSearchIcon, SearchIcon, UnmediumSearchIcon } from "@/assets/svgs";
import MyContext from "@/contexts";
import { useContext } from "react";
import { TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Searchbar = () => {
  const {state, dispatch} = useContext(MyContext)
  return (
      <View style={SearchbarStyles.container}>
        <TouchableOpacity
          onPress={() =>
            dispatch({ type: 'HIDEICONS', payload: !state.hideFilters })
          }
        >
          {state.hideFilters ? <MediumSearchIcon /> : <UnmediumSearchIcon />}
        </TouchableOpacity>
    
      <View style={[SearchbarStyles.inputContainer, SearchbarStyles.inputContainerClosed]}>
        <TextInput
          style={SearchbarStyles.input}
          placeholder="Search tutors"
          placeholderTextColor="#4B5563"
          value={state.searchTerm}
          onChangeText={(text) =>
            dispatch({ type: 'SEARCHTERM', payload: text })
          }
        />
        <TouchableOpacity style={SearchbarStyles.iconContainer}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Searchbar;
