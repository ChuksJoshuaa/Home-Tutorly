import { FONTS } from "@/constants/theme";
import { StyleSheet } from "react-native";

const CardStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
  },
  noTutorText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
  },
  card: {
    flexBasis: "100%",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    borderWidth: 3.76,
    borderColor: "#F6F6F6",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  verifiedContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#f3f4f6",
    width: 100,
    paddingVertical: 4,
  },
  verifiedText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    paddingHorizontal: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#f3f4f6",
    width: 67,
    paddingVertical: 4,
    marginHorizontal: 5
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: FONTS.circularbold,
    color: "black",
    paddingHorizontal: 4,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: FONTS.circularbold,
    color: "black",
    paddingVertical: 4,
  },
  bioText: {
    fontSize: 14,
    fontWeight: "300",
    color: "#222",
    fontFamily: FONTS.regular,
  },
});


export default CardStyles