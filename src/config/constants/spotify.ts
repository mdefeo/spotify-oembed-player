// /src/config/constants/spotify.ts
export const SPOTIFY_CONFIG = {
  CLIENT_ID: process.env.SPOTIFY_CLIENT_ID || "",
  CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET || "",
  TOKEN_URL: process.env.SPOTIFY_TOKEN_URL || "https://accounts.spotify.com/api/token",
  OEMBED_URL: process.env.SPOTIFY_OEMBED_URL || "https://open.spotify.com/oembed",
};
