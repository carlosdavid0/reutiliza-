import { View } from "react-native";

import Pessoas from '@assets/Pessoas.svg';
import Logo from '@assets/logo-large.svg';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import { Safearea } from "@src/components/ui/Safearea";
import { Text } from "@src/components/ui/Text";


export function Hero() {
    const navigation = useNavigation();

    return (

        <Safearea className="px-7">
            <Logo />
            <View className="flex-1 h-screen  justify-center">

                <View className="w-full space-y-2 ">
                    <View className="-mt-10">
                        <Pessoas

                        />
                    </View>

                    <View className="space-y-10">
                        <View className="space-y-2 py-2">
                            <Heading variant="heading" size="2xl">
                                Sua ferramenta
                                completa para viver
                                de forma sustentável.
                            </Heading>
                            <Text variant="text" size="sm">
                                Descubra dicas, receitas e produtos sustentáveis para um estilo de vida eco-friendly.
                            </Text>
                        </View>

                        <Button
                            onPress={() => navigation.navigate('Login')}
                            leftIcon={<View className="bg-primaryDark absolute left-0 flex items-center justify-center w-10 h-full rounded-l-md">
                                <Feather name="arrow-right" size={24} color="white" />
                            </View>}
                            label="Começar" variant="default" size="xl"
                        />
                    </View>
                </View>
            </View>
        </Safearea>


    )
}