// /src/app/layout.tsx
import "../../styles/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <main 
          className="flex justify-center flex-col m-auto h-screen w-screen"
          id="player-root"
          >
            <section
              className="flex flex-col items-center justify-center mx-auto w-1/2 h-1/2"
              id="player-container"
              aria-labelledby="favorites-heading" 
              role="contentinfo"
            >
              <div className="relative overflow-hidden h-full w-full">
                <h2 id="spotify-player-heading" className="sr-only">Spotify Player</h2>
                {children}
              </div>
            </section>
        </main>
      </body>
    </html>
  )
}