/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {logo} from './src/assets';
import Login from './src/screens/Login';
import {storage} from './src/utils/mmkvstore';
import {colors} from './src/constants/colors';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation';
import OnBoardingModal from './src/components/OnboardingModal';
const App = () => {
  // const username = storage.getString('user.name');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.black}}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
