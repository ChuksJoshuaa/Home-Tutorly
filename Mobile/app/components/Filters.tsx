import FilterStyles from "@/assets/styles/filter.styles";
import { RatingsIcon, VerifiedIcon } from "@/assets/svgs";
import { ADDFILTERS } from "@/constants/actionTypes";
import MyContext from "@/contexts";
import { filtersData } from "@/utils/data";
import { FiltersProps } from "@/utils/interface";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Filters = () => {
  const { state, dispatch } = useContext(MyContext);

  const handleFilters = (value: FiltersProps) => {
    dispatch({ type: ADDFILTERS, payload: value });
  };

  return (
    <View style={FilterStyles.container}>
      <View style={FilterStyles.header}>
        <Text style={FilterStyles.headerText}>Filters</Text>
      </View>

      <View style={FilterStyles.filtersContainer}>
        {filtersData?.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              FilterStyles.button,
              state.selectedFilters &&
              state.selectedFilters[item.id]?.id === item.id
                ? FilterStyles.selectedButton
                : FilterStyles.unselectedButton,
            ]}
            onPress={() => handleFilters(item as FiltersProps)}
          >
            <Text
              style={[
                FilterStyles.buttonText,
                state.selectedFilters &&
                state.selectedFilters[item.id]?.id === item.id
                  ? FilterStyles.selectedText
                  : FilterStyles.unselectedText,
              ]}
            >
              {item.name}
            </Text>
            {item?.isVerified && <VerifiedIcon />}
            {item?.isRating && <RatingsIcon />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


export default Filters;
