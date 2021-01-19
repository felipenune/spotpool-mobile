/* eslint-disable no-nested-ternary */
import React, { useCallback, useEffect, useState } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Snackbar } from 'react-native-paper';
import { ActivityIndicator, Text } from 'react-native';
import Header from '../../components/Header';
import PlaylistItem from '../../components/PlaylistItem';
import { useFilters } from '../../hooks/useFilters';
import api from '../../service/api';

import {
  ButtonText, ClearFiltersButton, Container, InputField, PlaylistContainer,
} from './styles';
import PickerComponent from '../../components/PickerComponent';
import Warning from '../../components/Warning';

interface IPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: [
    {
      url: string;
    }
  ];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string
}

interface IResponse {
  data: {
    message: string;
    playlists: {
      items: IPlaylist[];
    }
  }
}

const Home: React.FC = () => {
  const { filters } = useFilters();

  const [country, setCountry] = useState('');
  const [locale, setLocale] = useState('');
  const [limit, setLimit] = useState(0);

  const [filtersVisible, setFiltersVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');

  const [error, setError] = useState('');

  const [playlists, setPlaylists] = useState<IPlaylist[]>([]);

  const limitFilters = [
    { value: '1', name: 'Show 1 playlist' },
    { value: '5', name: 'Show 5 playlists' },
    { value: '10', name: 'Show 10 playlists' },
    { value: '30', name: 'Show 30 playlists' },
    { value: '50', name: 'Show 50 playlists' },
  ];

  function handleSearch(title: string) {
    setName(title);
  }

  function handleSelectedFilter(name: string, value: string) {
    switch (name.toLowerCase()) {
      case 'locale':
        setLocale(value);
        break;
      case 'país':
        setCountry(value);
        break;
      case 'limit':
        setLimit(Number(value));
        break;
      default:
        break;
    }
  }

  function clearFilters() {
    setCountry('');
    setLocale('');
    setLimit(0);
  }

  function handleSelectValue(name: string) {
    let value = '';
    switch (name.toLowerCase()) {
      case 'locale':
        value = locale || '';
        break;
      case 'país':
        value = country || '';
        break;
      default:
        break;
    }

    return value;
  }

  const getPlaylists = useCallback(async () => {
    try {
      setLoading(true);

      const playlistsResponse = await api.get('/', {
        params: {
          country: country ? (country === 'en_US' ? 'US' : country) : null,
          locale: locale || null,
          limit: limit > 0 ? limit : null,
        },
      }) as IResponse;

      const newPlaylists = name
        ? playlistsResponse.data.playlists.items.filter((e) => e.name.toUpperCase().includes(name.toUpperCase()))
        : playlistsResponse.data.playlists.items;

      setPlaylists(newPlaylists);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setError(error.response.data.error.message);
      } else {
        setError('Internal server error');
      }
    }
  }, [name, country, locale, limit]);

  useEffect(() => {
    getPlaylists();
    const interval = setInterval(() => getPlaylists(), 30000);
    return () => {
      clearInterval(interval);
    };
  }, [getPlaylists]);

  useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [error]);

  return (
    <Container>
      <Snackbar
        visible={!!error}
        onDismiss={() => setError('')}
        duration={2000}
        style={{
          backgroundColor: '#f82323',
          marginBottom: 20,
        }}
        action={{
          label: <SimpleLineIcons name="exclamation" size={25} color="#FFF" />,
        }}
      >
        <Text style={{ fontFamily: 'Poppins_400Regular' }}>{error}</Text>
      </Snackbar>
      <Header isVisible={filtersVisible} setFiltersVisible={setFiltersVisible}>
        <InputField
          placeholder="Search Playlist"
          placeholderTextColor="#000"
          value={name}
          onChangeText={(text: string) => setName(text)}
        />

        {filtersVisible && (
          <>
            {filters && filters.map((filter) => filter.values && (
            <PickerComponent
              key={filter.id}
              defaultValue={filter.id}
              options={filter.values}
              selectedValue={handleSelectValue(filter.name)}
              onValueChange={(itemValue, itemIndex) => handleSelectedFilter(filter.name, itemValue.toString())}
            />
            ))}

            <PickerComponent
              defaultValue="number of playlists"
              options={limitFilters}
              selectedValue={limit === 0 ? '' : limit.toString()}
              onValueChange={(itemValue, itemIndex) => handleSelectedFilter('Limit', itemValue.toString())}
            />

            <ClearFiltersButton rippleColor="#555" onPress={clearFilters}>
              <ButtonText>Clear filters</ButtonText>
            </ClearFiltersButton>
          </>
        )}
      </Header>

      <PlaylistContainer contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      >
        {loading ? (
          <ActivityIndicator size="large" color="#FFF" style={{ marginTop: '50%' }} />
        ) : (
          playlists.length ? (
            playlists.map((playlist) => (
              <PlaylistItem
                key={playlist.id}
                title={playlist.name}
                rate={playlist.tracks.total}
                url={playlist.external_urls.spotify}
                poster={playlist.images[0].url}
              />
            ))
          ) : (
            <Warning />
          )
        )}
      </PlaylistContainer>
    </Container>
  );
};

export default Home;
