import { View } from "react-native";
import Logo from "../assets/icon.svg";
export function Splash(){

    // animation for the logo

    
    return(
        <View className="flex-1 items-center justify-center bg-background">
        <Logo
            className="w-32 h-32"
            style={{
            }}
        />
      </View>
    )
}