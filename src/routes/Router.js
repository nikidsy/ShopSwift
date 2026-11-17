import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNaviator } from "@react-navigation/native-stack"
import {Login} from "../screens/Login";

export const AppRouter = () => {

    const Stack = createNativeStackNaviator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="register" component={Cadastro} />
                <Stack.Screen name="products" component={Produtos} />
                <Stack.Screen name="contact" component={Contato} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}