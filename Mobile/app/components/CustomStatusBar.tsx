import { COLORS } from "@/constants/index";
import { getPlatform } from "@/utils";
import { CustomStatusProps } from "@/utils/interface";
import React from "react";
import { StatusBar, View } from "react-native";

const STATUS_BAR_HEIGHT = getPlatform(0, 30);

const CustomStatusBar = ({ isLight, isTransparent, backgroundColor }: CustomStatusProps) => {
  return (
    <>
      {isLight ? (
        <View
          style={{
            width: '100%',
            height: STATUS_BAR_HEIGHT,
            backgroundColor: COLORS.$APP_BG,
          }}>
          <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.$APP_BG} />
        </View>
      ) : isTransparent ? (
        <StatusBar barStyle={'light-content'} backgroundColor={'#F5F5F5'} />
      ) : (
        <View
          style={{
            width: '100%',
            height: STATUS_BAR_HEIGHT,
            backgroundColor: backgroundColor ?? COLORS.$APP_BG,
          }}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={backgroundColor ?? COLORS.$APP_BG}
          />
        </View>
      )}
    </>
  );
};

export default CustomStatusBar;