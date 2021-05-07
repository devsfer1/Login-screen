import React from 'react';
import {Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

interface iHomeProps {
  navigation: StackNavigationProp<any, any>;
  route: any;
}

export function Initial({navigation}): React.FC<iHomeProps> {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
}
