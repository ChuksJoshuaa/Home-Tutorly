import { StyleSheet } from "react-native";


const SearchbarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    height: 52,
  },
  inputContainerOpen: {
    marginHorizontal: 8,
  },
  inputContainerClosed: {
    marginHorizontal: 0,
  },
  input: {
    width: '100%',
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 8,
    color: '#4B5563',
    backgroundColor: '#FFFFFF',
    borderColor: '#F3F4F6',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  iconContainer: {
    position: 'absolute',
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchbarStyles