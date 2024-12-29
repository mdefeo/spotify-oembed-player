// __tests__/SpotifyPlayer.test.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import fetchMock from "jest-fetch-mock";

// Helper to flush promises
const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0));

describe("SpotifyPlayer Component", () => {
  const spotifyUrl = "https://open.spotify.com/playlist/6fTj0s9lXElZY2NTY3thJF";

  let container: HTMLDivElement;
  let root: ReturnType<typeof createRoot>;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchMock.resetMocks();
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.removeChild(container);
    container = null!;
    jest.clearAllMocks();
    consoleErrorSpy.mockRestore();
  });

  it("renders a loading message initially", async () => {
    // Setup a delayed mock response to ensure we can check loading state
    fetchMock.mockResponseOnce(
      () => new Promise(resolve => setTimeout(() => resolve(JSON.stringify({ html: "<div>test</div>" })), 100))
    );

    await act(async () => {
      root.render(<SpotifyPlayer spotifyUrl={spotifyUrl} />);
    });

    // Check loading state immediately after initial render
    expect(container.querySelector(".animate-pulse")).not.toBeNull();

    // Wait for the delayed response to complete
    await act(async () => {
      await flushPromises();
    });
  });

  it("fetches and renders the Spotify iframe", async () => {
    const mockHtml = `<iframe src="${spotifyUrl}" width="100%" height="352" title="Spotify Player"></iframe>`;
    fetchMock.mockResponseOnce(JSON.stringify({ html: mockHtml }));

    await act(async () => {
      root.render(<SpotifyPlayer spotifyUrl={spotifyUrl} />);
    });

    // Wait for all state updates to complete
    await act(async () => {
      await flushPromises();
    });

    const iframe = container.querySelector("iframe");
    expect(iframe).not.toBeNull();
    expect(iframe?.getAttribute("src")).toBe(spotifyUrl);
    expect(iframe?.getAttribute("title")).toBe("Spotify Player");
  });

  it("renders an error message when fetch fails", async () => {
    // Setup error mock before rendering
    fetchMock.mockRejectOnce(new Error("Failed to fetch Spotify oEmbed data"));

    await act(async () => {
      root.render(<SpotifyPlayer spotifyUrl={spotifyUrl} />);
    });

    // Wait for error state to be set
    await act(async () => {
      await flushPromises();
    });

    expect(container.textContent).toContain("Failed to load Spotify player.");
  });
});