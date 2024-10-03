import { RatingsIcon, VerifiedIcon } from "@/assets/svgs";
import MyContext from "@/contexts";
import { FiltersProps } from "@/utils/interface";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfileFilters = () => {
  const { state } = useContext(MyContext);
  const [profileFiltersData, setProfileFiltersData] = useState<FiltersProps[]>(
    []
  );

  useEffect(() => {
    if (
      state.selectedFilters &&
      Object.keys(state.selectedFilters).length > 0
    ) {
      const result = Object.values(state.selectedFilters);
      setProfileFiltersData(result);
    } else {
      setProfileFiltersData([]);
    }
  }, [state.selectedFilters]);

  return (
    <View style={styles.container}>
      {profileFiltersData?.map((item, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Text style={styles.text}>{item.name}</Text>
          {item?.isVerified && <VerifiedIcon />}
          {item?.isRating && <RatingsIcon />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
    marginRight: 12,
    paddingBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: "white",
    marginVertical: 8,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    paddingHorizontal: 4,
  },
});

export default ProfileFilters;
