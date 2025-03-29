import { SafeAreaProvider }
  from "react-native-safe-area-context";
import LoginScreen from "./Screens/LoginScreen";
import ContactScreen from "./Screens/ContactScreen";

function App() {
  return <SafeAreaProvider>
    <LoginScreen />
    <ContactScreen />
  </SafeAreaProvider>
}

export default App;