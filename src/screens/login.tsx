import Logo from '@assets/logo-large.svg';
import { AntDesign } from '@expo/vector-icons';
import { Button } from '@src/components/ui/Button';
import { Heading } from '@src/components/ui/Heading';
import { Text } from '@src/components/ui/Text';
import { View } from 'react-native';

import * as Google from 'expo-auth-session/providers/google';
import { useEffect, useState } from 'react';

export function Login() {

    const [acesstoken, setAcessToken] = useState<string | null>(null)


    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        androidClientId: '884007396382-t85is821csq91nvusamv0oi502a46i20.apps.googleusercontent.com',
        iosClientId: '884007396382-9fks25aqmivanlcoqlr9141hckbbvrir.apps.googleusercontent.com',
        clientId: '884007396382-0hcl5p50ki0sek145u42upbfibjndrig.apps.googleusercontent.com',
        
    })

    useEffect(() => {
        if (response?.type === 'success') {
            setAcessToken(response.authentication?.accessToken ?? null)
        }
    }, [response])

    const getUserData = async () => {

    }

    return (
        <View className='items-center justify-center flex-1 px-6 gap-10'>
            <Logo />
            <View className='flex items-center justify-center space-y-1'>
                <Heading size='3xl' variant='heading'>
                    Vamos começar
                </Heading>
                <Text variant='text' size='sm' className='text-center'>
                    Realize login para começar sua jornada eco-friendly
                </Text>
            </View>

            <View className='w-full px-6'>
                <Button 
                    onPress={() => acesstoken ? getUserData() : promptAsync({
                        showInRecents: true,
                    })}
                    label={
                        <View className='flex items-center justify-center flex-row gap-3'>
                            <AntDesign name='google' size={24} color='white' />
                            <Text
                                variant='text' size='md' className='text-white font-bold'>
                                Continuar com Google
                            </Text>
                        </View>
                    }
                    size={'xl'} className='w-full bg-pink-600'
                />
            </View>


        </View>
    )
}