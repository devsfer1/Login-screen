import React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Initial from '../../screens/out/Initial';
import Login from '../../screens/out/Login';
import {Easing} from 'react-native-reanimated';

const stackRoutes = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      gestureEnabled: 'true',
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    headerMode="none">
    <stackRoutes.Screen name="Initial" component={Initial} />
    <stackRoutes.Screen name="Login" component={Login} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
