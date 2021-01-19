import axios from 'axios';
import Constants from 'expo-constants';


const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/browse/featured-playlists',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Constants.manifest.extra.spotify}`,
  },
});

export default api;
