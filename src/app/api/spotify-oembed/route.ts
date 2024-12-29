// /src/app/api/spotify-oembed/route.ts
import { NextRequest, NextResponse } from "next/server";
import { SPOTIFY_CONFIG } from "@/config/constants/spotify";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url"); 
  if (!url) {
    return NextResponse.json({ error: "URL parameter is required." }, { status: 400 });
  }

  try {
    const { OEMBED_URL } = SPOTIFY_CONFIG;
    const response = await fetch(`${OEMBED_URL}?url=${encodeURIComponent(url)}`);

    if (!response.ok) {
      throw new Error(`Spotify oEmbed request failed: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Spotify oEmbed API Error:", err);
    return NextResponse.json({ error: "Failed to fetch Spotify oEmbed data." }, { status: 500 });
  }
}
