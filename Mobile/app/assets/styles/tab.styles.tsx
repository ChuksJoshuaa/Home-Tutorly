import { COLORS, SIZES } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  focusedTab: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: SIZES.mid,
    paddingHorizontal: SIZES.small,
    backgroundColor: COLORS.hex,
    paddingVertical: SIZES.mid,
    borderRadius: SIZES.small,
  },
  unfocusedTab: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: SIZES.xLarge,
  },
  focusedIcon: {
    paddingHorizontal: undefined,
    backgroundColor: undefined,
    paddingVertical: undefined,
    borderRadius: undefined,
    opacity: undefined,
  },
  unfocusedIcon: {
    paddingHorizontal: SIZES.xxSmall,
    backgroundColor: COLORS.gray,
    paddingVertical: SIZES.xxSmall,
    borderRadius: SIZES.xSmall,
    opacity: 0.4,
  },
  focusedText: {
    color: '#121212',
    marginLeft: SIZES.xxSmall,
    fontWeight: '700',
    fontSize: SIZES.small,
  },
});


export default styles