import 'dotenv/config';

export default ({ config }) => {
  return {
    extra: {
      spotify: process.env.REACT_NATIVE_SPOTIFY_TOKEN,
    },
  };
};