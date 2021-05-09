import React from 'react';
import {Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

interface iHomeProps {
  navigation: StackNavigationProp<any, any>;
  route: any;
}

const Initial: React.FC<iHomeProps> = ({navigation}) => {
  return <Button title="Teste" onPress={() => navigation.navigate('Login')} />;
};

export default Initial;
