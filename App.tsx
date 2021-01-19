import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FiltersProvider } from './src/hooks/useFilters';
import Home from './src/screens/Home';

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <FiltersProvider>
        <Home />
        <StatusBar style="light" />
      </FiltersProvider>
    </>
  );
}
