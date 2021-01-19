import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const WarningContainer = styled.View`
  margin-top: 50%;
  width: 100%;
  align-items: center;
  justify-content: center
`;

export const WarningText = styled.Text`
  font-family: Poppins_400Regular;
  color: #FFF;
  font-size: ${scale(16)}px;
`;
