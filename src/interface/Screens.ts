import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import INota from "./Nota";

export type RootStackProps = {
    "Home": undefined
    "Nota": {nota: INota}
}

export type NavigationStackProps = NativeStackNavigationProp<RootStackProps>