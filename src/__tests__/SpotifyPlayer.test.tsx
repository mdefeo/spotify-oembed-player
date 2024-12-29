// /src/__tests__/SpotifyPlayer.test.tsx
import { fetchSpotifyOEmbedData } from "@/utils/spotifyUtils";

describe("SpotifyPlayer Utility Functions", () => {
  const spotifyUrl = "https://open.spotify.com/playlist/6fTj0s9lXElZY2NTY3thJF";

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("fetches and returns the Spotify oEmbed HTML", async () => {
    const mockFetch = jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        html: `<iframe src="${spotifyUrl}" width="100%" height="352" title="Spotify Player"></iframe>`,
      }),
    } as Response);

    const html = await fetchSpotifyOEmbedData(spotifyUrl);

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/spotify-oembed?url=${encodeURIComponent(spotifyUrl)}`
    );
    expect(html).toContain("iframe");

    mockFetch.mockRestore();
  });

  it("throws an error when fetch fails", async () => {
    const mockFetch = jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
    } as Response);

    await expect(fetchSpotifyOEmbedData(spotifyUrl)).rejects.toThrow(
      "Failed to fetch Spotify oEmbed data"
    );

    mockFetch.mockRestore();
  });
});
