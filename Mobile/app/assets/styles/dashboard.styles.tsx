import { COLORS } from "@/constants/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    backgroundColor: COLORS.$APP_BG,
    width: '100%',
  },
  safeArea: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});

export default styles;
