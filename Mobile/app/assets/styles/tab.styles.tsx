import { COLORS, SIZES } from "@/constants";
import { getPlatform } from "@/utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  focusedTab: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: getPlatform(SIZES.mid, -SIZES.xSmall),
    paddingHorizontal: SIZES.small,
    backgroundColor: COLORS.hex,
    paddingVertical: SIZES.mid,
    borderRadius: SIZES.small,
  },
  unfocusedTab: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: getPlatform(SIZES.xLarge, -SIZES.xxxSmall + SIZES.xxSmall),
  },
  focusedIcon: {
    paddingHorizontal: undefined,
    backgroundColor: undefined,
    paddingVertical: undefined,
    borderRadius: undefined,
    opacity: undefined,
  },
  unfocusedIcon: {
    opacity: 1,
  },
  unIcon: {
    paddingHorizontal: SIZES.xxSmall,
    backgroundColor: COLORS.gray,
    paddingVertical: SIZES.xxSmall,
    borderRadius: SIZES.xSmall,
    opacity: 0.4,
  },
  focusedText: {
    color: "#121212",
    marginLeft: SIZES.xxSmall,
    fontWeight: "700",
    fontSize: SIZES.small,
  },
});

export default styles;
