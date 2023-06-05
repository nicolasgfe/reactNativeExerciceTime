import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./interface";
import { Home } from "../../screens/home";
import { Register } from "../../screens/register";
import { useTheme } from "native-base";
import { NativeStackNavigationOptions} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    const { colors } = useTheme();
    const navigatiorScreenOptions: NativeStackNavigationOptions ={
        headerStyle: { backgroundColor: colors.primary[600] },
        statusBarColor: colors.primary[700],
        headerTintColor: colors.white
    }

    return (
        <Stack.Navigator screenOptions={navigatiorScreenOptions} initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AppNavigator