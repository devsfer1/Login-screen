import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import React from 'react';
import {Text, Button} from 'react-native';

interface iHomeProps {
  navigation: StackNavigationProp<any, any>;
  route: any;
}

const Stack = createStackNavigator();

const HomeScreen: React.FC<iHomeProps> = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
};

const ProfileScreen: React.FC<iHomeProps> = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
