import { SafeAreaProvider } from "react-native-safe-area-context";
import { TaskProvider } from "./contexts/TaskContext"; // Importa o Provider!
import TaskScreen from "./screens/TaskScreen";

function App() {
  return (
    <SafeAreaProvider>
      <TaskProvider> {/* <- Aqui! */}
        <TaskScreen />
      </TaskProvider>
    </SafeAreaProvider>
  );
}

export default App;
