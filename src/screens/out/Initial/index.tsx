import React from 'react';

import Button from '../../../components/Button';

import {Container, Title, Paragraph, LogoImg} from './styles';
import {iInitialProps} from '../../../common/types';
import Logo from '../../../assets/images/logo.png';

import colors from '../../../styles/colors';

const Initial: React.FC<iInitialProps> = ({navigation}) => (
  <Container>
    <LogoImg source={Logo} resizeMode="contain" />
    <Title>Login</Title>
    <Paragraph>
      We offer the best products on the market. Discover our app today.
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
