import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./Routes/StackNavigator";
import BottomTabNavigator from "./Routes/BottomTabNavigator";
import TopTabNavigator from "./Routes/TopTabNavigator";
import DrawerNavigator from "./Routes/DrawerNavigator";


function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
