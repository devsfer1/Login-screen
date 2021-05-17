import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Initial from '../../screens/out/Initial';
import Login from '../../screens/out/Login';
import SignUp from '../../screens/out/Sign Up';

const stackRoutes = createStackNavigator();

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
    <stackRoutes.Screen name="Sign Up" component={SignUp} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
