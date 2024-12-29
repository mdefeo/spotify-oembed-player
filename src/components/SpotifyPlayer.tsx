// /src/app/components/SpotifyPlayer.tsx
"use client";
import React, { useState, useEffect } from "react";
import { SpotifyPlayerProps } from "@/types/SpotifyPlayerProps";

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ spotifyUrl }) => {
  const [oEmbedHtml, setOEmbedHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOEmbedData = async () => {
      try {
        const response = await fetch(`/api/spotify-oembed?url=${encodeURIComponent(spotifyUrl)}`);
        if (!response.ok) throw new Error("Failed to fetch Spotify oEmbed data");

        const data = await response.json();
        setOEmbedHtml(data.html);
      } catch (err) {
        console.error("Error fetching Spotify oEmbed data:", err);
        setError("Failed to load Spotify player.");
      }
    };

    fetchOEmbedData();
  }, [spotifyUrl]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

if (!oEmbedHtml && !error) {
return (
    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-[152px] flex items-center justify-center">
    <p className="text-gray-500">Loading Spotify player...</p>
    </div>
);
}

if (oEmbedHtml) {
return <div dangerouslySetInnerHTML={{ __html: oEmbedHtml }} />;
}

return null;
};

export default SpotifyPlayer;