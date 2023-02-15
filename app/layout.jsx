import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;300;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header>
          <div className="container">
            <h1>Manifesto<span>Métricas</span></h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
