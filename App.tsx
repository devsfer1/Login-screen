import 'react-native-gesture-handler';

import React from 'react';
import Routes from './src/services/routes';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
} from '@expo-google-fonts/open-sans';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
};

export default App;

