import React from 'react';

import {iLoginProps} from '../../../common/types';

import {Container, Title} from './styles';

const Login: React.FC<iLoginProps> = ({navigation}) => (
  <Container>
    <Title>Welcome Back.</Title>
  </Container>
);

export default Login;
