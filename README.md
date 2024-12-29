# Spotify oEmbed Player

A React and TypeScript application that provides an embeddable Spotify player using Spotify's oEmbed API. This project allows users to embed Spotify playlists, tracks, or episodes into their applications easily, with accessibility and responsiveness in mind.

## Features

- Fetches oEmbed data from Spotify's oEmbed API.
- Fully responsive and accessible.
- Supports customization for embedding Spotify content.
- Built with modern tools like Next.js, Jest, and TailwindCSS.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [Yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/spotify-oembed-player.git
   cd spotify-oembed-player
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create an `.env` file in the root directory with the following contents:

   ```env
   SPOTIFY_CLIENT_ID=your-spotify-client-id
   SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

   Replace `your-spotify-client-id` and `your-spotify-client-secret` with your Spotify Developer credentials. For more details, visit [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).

4. Run the development server:

   ```bash
   yarn dev
   ```

   Open your browser and navigate to `http://localhost:3000`.

## Usage

To embed a Spotify playlist, track, or episode:

1. Use the `SpotifyPlayer` component in your code.

   ```tsx
   import SpotifyPlayer from "@/components/SpotifyPlayer";

   const Example = () => (
     <SpotifyPlayer spotifyUrl="https://open.spotify.com/playlist/6fTj0s9lXElZY2NTY3thJF" />
   );

   export default Example;
   ```

2. The player will automatically fetch and render the oEmbed content for the provided URL.

## Folder Structure

```plaintext
spotify-oembed-player/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── spotify-oembed/
│   │   │   │   └── route.ts
│   │   │   └── spotify-token/
│   │   │       └── route.ts
│   │   └── page.tsx
│   ├── components/
│   │   ├── SpotifyPlayer.tsx
│   │   └── SkeletonLoader.tsx
│   ├── types/
│   │   └── SpotifyPlayerProps.ts
│   └── styles/
│       └── globals.css
├── public/
├── .env.example
├── jest.config.ts
├── tsconfig.json
├── README.md
└── package.json
```

## Development

### Scripts

- `yarn dev`: Start the development server.
- `yarn build`: Build the application for production.
- `yarn start`: Start the production server.
- `yarn lint`: Run ESLint to find and fix issues.
- `yarn test`: Run Jest tests.

### Testing

This project uses Jest for testing.

1. To run tests:

   ```bash
   yarn test
   ```

2. Tests are located in the `__tests__` folder. Example test file:

   ```shell
   src/__tests__/SpotifyPlayer.test.ts
   ```

3. Mock data and API responses are used for testing.

### Linting

Run the following command to lint your code:

```bash
yarn lint
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Spotify oEmbed API](https://developer.spotify.com/documentation/embeds/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
