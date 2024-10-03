import { SIZES } from "@/constants/index";
import DashboardStyles from "@/styles/dashboard.styles";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  return (
    <SafeAreaView style={DashboardStyles.safeArea}>
      <KeyboardAvoidingView
        style={DashboardStyles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={[
              DashboardStyles.scrollView,
              { paddingBottom: SIZES.large },
            ]}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
          >
            <View style={DashboardStyles.container}>{children}</View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
