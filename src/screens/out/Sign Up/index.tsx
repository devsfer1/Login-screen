import React from 'react';

import {StackNavigationProp} from '@react-navigation/stack';

import {Container, Title} from './styles';

interface iSignUpProps extends StackNavigationProp {
  navigation: StackNavigationProp<any, any>;
}

const SignUp: React.FC<iSignUpProps> = ({navigation}) => (
  <Container>
    <Title>Create Account.</Title>
  </Container>
);

export default SignUp;
