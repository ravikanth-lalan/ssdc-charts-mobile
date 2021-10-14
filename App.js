import { StatusBar } from 'expo-status-bar';
import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens, ScreensConfig } from './src/common/constants';
import Home from './src/home';
import NivoCharts from './src/nivo';
import VictoryNativeCharts from './src/victory-native';
import VictoryCharts from './src/victory';
import ReCharts from './src/recharts';

const ScreensStack = [
  {
    name: Screens.HOME,
    component: Home,
    options: {
      ...ScreensConfig[Screens.HOME],
    },
  },
  {
    name: Screens.NIVO_CHARTS,
    component: NivoCharts,
    options: {
      ...ScreensConfig[Screens.NIVO_CHARTS],
    },
  },
  {
    name: Screens.RECHARTS,
    component: ReCharts,
    options: {
      ...ScreensConfig[Screens.RECHARTS],
    },
  },
  {
    name: Screens.VICTORY_CHARTS,
    component: VictoryCharts,
    options: {
      ...ScreensConfig[Screens.VICTORY_CHARTS],
    },
  },
  {
    name: Screens.VICTORY_NATIVE_CHARTS,
    component: VictoryNativeCharts,
    options: {
      ...ScreensConfig[Screens.VICTORY_NATIVE_CHARTS],
    },
  },
];

const App = () => {
  const Stack = useMemo(() => createNativeStackNavigator());

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          {ScreensStack.map((screenProps, index) => (
            <Stack.Screen {...screenProps} key={index} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
