import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type AppStackParamList = {
    Home: undefined,
    Register: undefined,
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>