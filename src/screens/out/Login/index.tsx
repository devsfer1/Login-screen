import React from 'react';
import {Text} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';

import {Container, Title} from './styles';

interface iLoginProps extends StackNavigationProp {
  navigation: StackNavigationProp<any, any>;
}

const Login: React.FC<iLoginProps> = () => (
  <Container>
    <Title>Welcome Back.</Title>
  </Container>
);

export default Login;
