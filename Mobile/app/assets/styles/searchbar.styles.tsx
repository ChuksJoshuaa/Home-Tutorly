import { SHADOWS, SIZES } from "@/constants";
import { StyleSheet } from "react-native";

const SearchbarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    width: '100%'
  },
  inputContainer: {
    position: 'relative',
    width: '87%',
    height: 50,
  },
  inputContainerOpen: {
    marginHorizontal: 8,
  },
  inputContainerClosed: {
    marginHorizontal: SIZES.xxSmall,
  },
  input: {
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 8,
    color: '#4B5563',
    backgroundColor: '#FFFFFF',
    borderColor: '#F3F4F6',
    borderWidth: 1,
    borderRadius: 8,
    ...SHADOWS
  },
  iconContainer: {
    position: 'absolute',
    right: 12,
    top: -50,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchbarStyles