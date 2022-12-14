import '../styles/globals.css'
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
// incorporates global CSS!
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default MyApp
