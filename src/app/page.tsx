// /src/app/page.tsx
import SpotifyPlayer from "@/components/SpotifyPlayer";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Spotify oEmbed Player
      </h1>
      <SpotifyPlayer spotifyUrl="https://open.spotify.com/playlist/6fTj0s9lXElZY2NTY3thJF" />
    </main>
  );
}
