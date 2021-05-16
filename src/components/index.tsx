import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

import {LoginButton, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: ButtonProps) {
  return (
    <LoginButton>
      <ButtonText>{title}</ButtonText>
    </LoginButton>
  );
}
