import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AppRouter } from "./routes/Router";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <AppRouter />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
