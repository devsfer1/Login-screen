import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {LoginButton, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor: string;
  textColor: string;
}

export default function Button({
  title,
  backgroundColor,
  textColor,
  ...rest
}: ButtonProps) {
  return (
    <LoginButton backgroundColor={backgroundColor} {...rest}>
      <ButtonText textColor={textColor}>{title}</ButtonText>
    </LoginButton>
  );
}
