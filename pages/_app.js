import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet"/>
      </head>

      <Component {...pageProps} />

    </>
  )
}

export default MyApp
