import { RectButton } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #2ccf5b;
`;

export const InputField = styled.TextInput`
  font-size: ${scale(16)}px;
  height: ${scale(40)}px;
  width: 80%;
  margin-left: 5px;
  margin-bottom: 5px;
  justify-content: center;
  background-color: #FFF;
  padding-left: 10px;
  border-radius: 10px;
  color: #000;
  font-family: Poppins_400Regular;
`;

export const ClearFiltersButton = styled(RectButton)`
  height: ${scale(40)}px;
  width: 75%;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  border-radius: 8px;
  margin-bottom: ${scale(50)}px;
  border-width: 1px;
  border-color: #FFF;
  background-color: #000;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: ${scale(16)}px;
  font-family: Poppins_400Regular;
`;

export const PlaylistContainer = styled.ScrollView`
  margin-top: -5%;
  width: 100%;
  background-color: #121212;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 1;
`;
