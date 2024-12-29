// /src/app/api/spotify-token/route.ts
import { NextResponse } from "next/server";
import { SPOTIFY_CONFIG } from "@/config/constants/spotify";

export async function GET() {
  try {
    const { CLIENT_ID, CLIENT_SECRET, TOKEN_URL } = SPOTIFY_CONFIG;

    const response = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    });

    if (!response.ok) {
      throw new Error(`Spotify token request failed: ${response.status}`);
    }

    const tokenData = await response.json();
    return NextResponse.json(tokenData);
  } catch (err) {
    console.error("Spotify Token API Error:", err);
    return NextResponse.json({ error: "Failed to generate Spotify token" }, { status: 500 });
  }
}
