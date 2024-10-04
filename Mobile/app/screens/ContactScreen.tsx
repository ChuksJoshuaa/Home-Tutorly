import CustomStatusBar from "@/components/CustomStatusBar";
import Form from "@/components/Form";
import ScreenWrapper from "@/components/Screen";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <CustomStatusBar isTransparent={true} isLight={true} />
      <ScreenWrapper>
        <Form />
      </ScreenWrapper>
    </Fragment>
  );
};

export default Home;
