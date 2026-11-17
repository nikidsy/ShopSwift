import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Cadastro } from "../screens/Cadastro";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator();

export const AppRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="register" component={Cadastro} />
                <Stack.Screen name="home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
