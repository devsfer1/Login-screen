import React from 'react';
//import {Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Container, Title, LoginButton, ButtonText, Paragraph} from './styles';

interface iHomeProps {
  navigation: StackNavigationProp<any, any>;
  route: any;
}

const Initial: React.FC<iHomeProps> = ({navigation}) => (
  <Container>
    <Title>Login Template</Title>
    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <LoginButton onPress={() => navigation.navigate('Login')}>
      <ButtonText>Login</ButtonText>
    </LoginButton>
    <LoginButton onPress={() => navigation.navigate('Sign Up')}>
      <ButtonText>Sign Up</ButtonText>
    </LoginButton>
  </Container>
);

export default Initial;
