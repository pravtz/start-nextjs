import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../Styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../Styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
