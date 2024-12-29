// /src/app/components/SpotifyPlayer.tsx
"use client";

import React, { useState, useEffect } from "react";
import { SpotifyPlayerProps } from "@/types/SpotifyPlayerProps";
import { fetchSpotifyOEmbedData } from "@/utils/spotifyUtils";

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ spotifyUrl }) => {
  const [oEmbedHtml, setOEmbedHtml] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const html = await fetchSpotifyOEmbedData(spotifyUrl);
        setOEmbedHtml(html);
      } catch (error) {
        console.error("Error fetching Spotify oEmbed data:", error);
      }
    };

    fetchData();
  }, [spotifyUrl]);

  if (!oEmbedHtml) {
    return <p>Loading...</p>;
  }

  return <div dangerouslySetInnerHTML={{ __html: oEmbedHtml }} />;
};

export default SpotifyPlayer;
