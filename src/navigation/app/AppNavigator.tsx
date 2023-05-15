import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./interface";
import { Home } from "../../screens/home";
import { Register } from "../../screens/register";

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AppNavigator