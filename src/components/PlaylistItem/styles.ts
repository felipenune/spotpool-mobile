import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 300px;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 30px;
  background: #303030;
  text-decoration: none;
  border: none;
  margin-bottom: 5%;
  margin-top: 5%;
  z-index: 1;
`;

export const PosterBackground = styled.Image`
  height: 60%;
  width: 90%;
  border-radius: 30px;
`;

export const InfoContainer = styled.View`
  justify-content: space-between;
  align-items: baseline;
  height: 30%;
  width: 80%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  text-align: left;
`;

export const TrackDiv = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Tracks = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-left: 8px;
`;
