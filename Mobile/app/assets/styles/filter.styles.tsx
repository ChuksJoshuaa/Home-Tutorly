import { FONTS } from "@/constants/theme";
import { StyleSheet } from "react-native";



const FilterStyles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  headerText: {
    color: "black",
    fontWeight: "bold",
    fontFamily: FONTS.circularbold,
    fontSize: 18,
  },
  filtersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginHorizontal: 12,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  selectedButton: {
    backgroundColor: "#1f2937",
  },
  unselectedButton: {
    backgroundColor: "#f3f4f6",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 4,
    fontFamily: FONTS.circularbold,
  },
  selectedText: {
    color: "white",
  },
  unselectedText: {
    color: "black",
  },
});


export default FilterStyles