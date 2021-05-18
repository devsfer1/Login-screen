import React from 'react';

import Button from '../../../components/Button';

import {Container, Title, Paragraph} from './styles';
import {iInitialProps} from '../../../common/types';

import colors from '../../../styles/colors';

const Initial: React.FC<iInitialProps> = ({navigation}) => (
  <Container>
    <Title>Login Template</Title>
    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button
      title="Login"
      backgroundColor={colors.red}
      textColor={colors.white}
      onPress={() => navigation.navigate('Login')}
    />
    <Button
      title="Sign Up"
      backgroundColor={colors.white}
      textColor={colors.red}
      onPress={() => navigation.navigate('Sign Up')}
    />
  </Container>
);

export default Initial;
