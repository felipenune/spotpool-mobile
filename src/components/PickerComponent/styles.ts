import { Picker } from '@react-native-picker/picker';
import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${scale(40)}px;
  width: 75%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 8px;
  background-color: #FFF;


`;

export const PickerStyled = styled(Picker)`
  height: 100%;
  width: 100%;
`;
