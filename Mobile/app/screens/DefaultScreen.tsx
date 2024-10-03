import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <View>
        <Text>Default Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
