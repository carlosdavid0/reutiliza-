import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { NavigationContainer } from "@react-navigation/native";
import { Loading } from '@src/components/Loading';
import { AuthRoutes } from "@src/routes/auth.routes";
import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import React from "react";


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_300Light,
    Ubuntu_700Bold
  });

  if(!fontsLoaded) return <Loading />;


  return (
    <NavigationContainer>
      <AuthRoutes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


