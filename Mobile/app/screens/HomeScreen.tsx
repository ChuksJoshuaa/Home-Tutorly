import CustomStatusBar from "@/components/CustomStatusBar";
import ScreenWrapper from "@/components/Screen";
import Searchbar from "@/components/Searchbar";
import { Fragment } from "react";
import { View } from "react-native";

const Home = () => {
  return (
    <Fragment>
      <CustomStatusBar isTransparent={true} isLight={true} />
      <ScreenWrapper>
        <View>
          <Searchbar />
        </View>
      </ScreenWrapper>
    </Fragment>
  );
};

export default Home;
