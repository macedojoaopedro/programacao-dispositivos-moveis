import { SafeAreaProvider, LoginScreen } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SettingsScreen from "./Screens/SettingsScreen";

function App() {
  return(
    <SafeAreaProvider>
      <LoginScreen />
      <ChatScreen />
      <ProfileScreen />
      <SettingsScreen /> 
    </SafeAreaProvider>
  )
  
}

export default App;
