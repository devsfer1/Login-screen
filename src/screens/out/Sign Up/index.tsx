import React from 'react';

import {iSignUpProps} from '../../../common/types';

import {Container, Title} from './styles';

const SignUp: React.FC<iSignUpProps> = ({navigation}) => (
  <Container>
    <Title>Create Account.</Title>
  </Container>
);

export default SignUp;
