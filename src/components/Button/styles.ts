import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  border: 1px #ececec;
  margin-bottom: 15px;
  padding: 15px 0;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.textColor};
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.5px;
`;
