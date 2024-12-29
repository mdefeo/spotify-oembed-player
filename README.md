# Spotify oEmbed Player

A React and TypeScript application that provides an embeddable Spotify player using Spotify's oEmbed API. This project allows users to embed Spotify playlists, tracks, or episodes into their applications easily, with accessibility and responsiveness in mind.

## Table of Contents

- [Spotify oEmbed Player](#spotify-oembed-player)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [Development](#development)
    - [Scripts](#scripts)
    - [Testing](#testing)
    - [Linting](#linting)
  - [Contributing](#contributing)
  - [Future Plans](#future-plans)
  - [Changelog](#changelog)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)
  - [Getting Help](#getting-help)
  - [Maintainers and Contributors](#maintainers-and-contributors)

## Project Overview

This project provides a reusable and accessible Spotify oEmbed player component built with React and TypeScript. It allows users to easily embed Spotify playlists, tracks, or episodes into their applications, ensuring accessibility and responsiveness.

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
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   SPOTIFY_TOKEN_URL=https://accounts.spotify.com/api/token
   SPOTIFY_OEMBED_URL=https://open.spotify.com/oembed
   SPOTIFY_PLAYLIST=https://open.spotify.com/playlist/6fTj0s9lXElZY2NTY3thJF?utm_source=generator&theme=0
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

   Replace `your_spotify_client_id` and `your_spotify_client_secret` with your Spotify Developer credentials. For more details, visit [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).

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
├── public/
├── src/
│   ├── __tests__/
│   │   └── SpotifyPlayer.test.tsx
│   ├── app/
│   │   ├── api/
│   │   │   ├── spotify-oembed/
│   │   │   │   └── route.ts
│   │   │   └── spotify-token/
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── SkeletonLoader.tsx
│   │   └── SpotifyPlayer.tsx
│   ├── config/
│   │   └── constants/
│   │       └── spotify.ts
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── SpotifyPlayerProps.ts
│   └── utils/
│       └── spotifyUtils.ts
```

## Development

### Scripts

- `yarn dev`: Start the development server.
- `yarn build`: Build the application for production.
- `yarn start`: Start the production server.
- `yarn lint`: Run ESLint to find and fix issues.
- `yarn test`: Run Jest tests.
- `yarn test:watch`: Run Jest tests in watch mode.
- `yarn test:coverage`: Run Jest tests with coverage report.

### Testing

This project uses Jest for testing.

1. To run tests:

   ```bash
   yarn test
   ```

2. Tests are located in the `__tests__` folder. Example test file:

   ```plaintext
   src/__tests__/SpotifyPlayer.test.tsx
   ```

3. Mock data and API responses are used for testing.

### Linting

Run the following command to lint your code:

```bash
yarn lint
```

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on the process for submitting pull requests to us.

## Future Plans

- Add support for dynamically embedding Spotify music.
- Improve error handling and user feedback.
- Add more customization options for the player.
- Enhance test coverage and add more unit tests.

## Changelog

All notable changes to this project will be documented in this file. See the [Changelog](CHANGELOG.md) for details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## Acknowledgments

- [Spotify oEmbed API](https://developer.spotify.com/documentation/embeds/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)

## Getting Help

If you need help with this project, you can open an issue on the [GitHub Issues page](https://github.com/mdefeo/spotify-oembed-player/issues).

## Maintainers and Contributors

This project is maintained by Marcello De Feo. Contributions are welcome! Please see the [Contributing](#contributing) section for more details.
