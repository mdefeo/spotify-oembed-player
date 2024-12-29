export async function fetchSpotifyOEmbedData(spotifyUrl: string): Promise<string> {
  const response = await fetch(`/api/spotify-oembed?url=${encodeURIComponent(spotifyUrl)}`);
  if (!response.ok) {
    throw new Error("Failed to fetch Spotify oEmbed data");
  }

  const data = await response.json();
  return data.html;
}
