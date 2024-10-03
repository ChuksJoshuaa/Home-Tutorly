import Cards from "@/components/Card";
import CustomStatusBar from "@/components/CustomStatusBar";
import Filters from "@/components/Filters";
import ProfileFilters from "@/components/ProfileFilters";
import ScreenWrapper from "@/components/Screen";
import Searchbar from "@/components/Searchbar";
import MyContext from "@/contexts";
import { Fragment, useContext } from "react";
import { View } from "react-native";

const Home = () => {
  const {state} = useContext(MyContext)
  return (
    <Fragment>
      <CustomStatusBar isTransparent={true} isLight={true} />
      <ScreenWrapper>
        <View>
          <Searchbar />
          <ProfileFilters />
          {state.hideFilters && <Filters />}
          <Cards />
        </View>
      </ScreenWrapper>
    </Fragment>
  );
};

export default Home;
