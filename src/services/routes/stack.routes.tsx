import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Initial from '../../../components/screens/out/Initial/';
import Login from '../../components/screens/out/Login';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator headerMode="none">
    <stackRoutes.Screen name="Initial" component={Initial} />
    <stackRoutes.Screen name="Login" component={Login} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
