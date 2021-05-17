import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const LoginButton = styled.TouchableOpacity`
  width: 80%;
  background-color: ${props => props.backgroundColor};
  margin-bottom: 15px;
  padding: 15px 0;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.textColor};
  text-align: center;
  text-transform: uppercase;
`;
