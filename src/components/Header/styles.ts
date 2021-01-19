import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';

export const Container = styled.View`
  background-color: #1CCF5B;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 10%;
  min-height: ${scale(150)}px;
`;

export const FilterContainer = styled.View`
  width: 90%;
  min-height: 5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 80%;
  width: 30%;
  resize-mode: contain;
`;
