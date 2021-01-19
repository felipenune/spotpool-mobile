import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Linking } from 'react-native';
import {
  Container, InfoContainer, PosterBackground, Title, TrackDiv, Tracks,
} from './styles';

interface IProps {
  title: string;
  rate: number;
  url: string;
  poster: string;
}

const PlaylistItem: React.FC<IProps> = ({
  title,
  rate,
  url,
  poster,
}: IProps) => {
  const image = { uri: `${poster}` };

  function handleOpenSpotify() {
    Linking.openURL(`${url}`);
  }

  return (
    <Container onPress={handleOpenSpotify}>
      <PosterBackground source={image} />

      <InfoContainer>
        <Title>{title.toUpperCase()}</Title>

        <TrackDiv>
          <Feather
            name="music"
            size={20}
            color="#1ccf5b"
          />
          <Tracks>
            {rate}
            {' '}
            tracks
          </Tracks>
        </TrackDiv>
      </InfoContainer>
    </Container>
  );
};

export default PlaylistItem;
