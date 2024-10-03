import CardStyles from "@/assets/styles/card.styles";
import { RatingsIcon, VerifiedIcon } from "@/assets/svgs";
import useFilterHook from "@/components/useFilterHook";
import MyContext from "@/contexts";
import { tutorsData } from "@/utils/data";
import { FiltersProps } from "@/utils/interface";
import React, { useContext, useEffect } from "react";
import { Image, Text, View } from "react-native";

const Cards = () => {
  const { state } = useContext(MyContext);

  const SearchedData = () => {
    const filteredTutors = useFilterHook(
      tutorsData,
      state.selectedFilters as { [key: string]: FiltersProps }
    );
    return filteredTutors.filter((item) =>
      item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    SearchedData();
  }, [state.searchTerm, state.selectedFilters]);

  return (
    <View>
      <View style={CardStyles.container}>
        {SearchedData()?.length === 0 ? (
          <Text style={CardStyles.noTutorText}>No tutor found</Text>
        ) : (
          <View style={CardStyles.grid}>
            {SearchedData()?.map((item) => (
              <View key={item.id} style={CardStyles.card}>
                <Image
                  style={CardStyles.image}
                  source={{ uri: item.img }}
                  alt={`${item.name}__${item.id}`}
                />

                <View style={CardStyles.infoContainer}>
                  {item?.isVerified && (
                    <View style={CardStyles.verifiedContainer}>
                      <Text style={CardStyles.verifiedText}>Verified</Text>
                      <VerifiedIcon />
                    </View>
                  )}
                  <View style={CardStyles.ratingContainer}>
                    <Text style={CardStyles.ratingText}>{item.rating}</Text>
                    <RatingsIcon />
                  </View>
                </View>
                <View>
                  <Text style={CardStyles.nameText}>{item.name}</Text>
                  <Text style={CardStyles.bioText}>{item.bio}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};


export default Cards;
