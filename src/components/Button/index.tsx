import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {LoginButton, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function Button({title, ...rest}: ButtonProps) {
  return (
    <LoginButton>
      <ButtonText>{title}</ButtonText>
    </LoginButton>
  );
}
