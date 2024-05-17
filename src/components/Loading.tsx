import LottieView from "lottie-react-native";
import { View } from "react-native";

export function Loading() {
    return (
        <View className="flex-1 justify-center items-center">
            <LottieView
                style={{ width: 200, height: 200 }}
                source={require('@assets/animations/tree.json')} 
                autoPlay 
                loop={true} />
        </View>
    )
}