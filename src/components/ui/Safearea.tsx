import { cn } from "@src/lib/utils";
import { } from "expo-status-bar";
import { Dimensions, Platform, StatusBar, View, ViewProps } from "react-native";

type SafeareaProps = ViewProps

export function Safearea({ children, className }: SafeareaProps) {

    return (

        <View
            style={{
                flex: 1,
                paddingBottom: 28,
                paddingTop: Platform.OS === 'android' ?
                    StatusBar.currentHeight && StatusBar.currentHeight + 20
                    : Dimensions.get('window').height * 0.09,
            }}
            className={cn( 'flex-1', 'bg-background', `px-6`)}
        >
            {children}
        </View>


    );
}