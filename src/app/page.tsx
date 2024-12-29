// /src/app/pages.tsx
"use client";
import React from "react";
import { useState, useEffect } from "react";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import { SPOTIFY_CONFIG } from "@/config/constants/spotify";
import SkeletonLoader from "@/components/SkeletonLoader";

export default function SpotifyPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <SpotifyPlayer spotifyUrl={SPOTIFY_CONFIG.URLS.PLAYLIST_URL} />
  ) : (
    <SkeletonLoader />
  );
}