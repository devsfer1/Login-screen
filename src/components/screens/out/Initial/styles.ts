import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #a83246;
  margin-bottom: 10px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 80%;
  background-color: #a83246;
  margin-bottom: 15px;
  padding: 15px 0;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
`;

export const Paragraph = styled.Text`
  color: #1c1c1c;
  font-size: 16px;
  font-weight: 100;
  margin-bottom: 25px;
  width: 80%;
  text-align: center;
`;
