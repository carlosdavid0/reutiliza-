import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Hero } from "@src/screens/Hero";
import { Login } from "@src/screens/login";

export function AuthRoutes() {
    const { Navigator, Screen, Group } = createNativeStackNavigator();

    return (
        <Navigator
            screenListeners={{
                beforeRemove: (e) => {
                    console.log('Screen about to be removed', e);
                },
                focus: (e) => {
                    console.log('Screen focused', e);
                },
                blur: (e) => {
                    console.log('Screen blurred',e);
                },

            }}
        >
            <Group screenOptions={{
                animation: 'slide_from_right',
                headerShown: false
            }}>
                <Screen name="Home" component={Hero} />
                <Screen name="Login" component={Login} />

            </Group>
        </Navigator>
    );
}