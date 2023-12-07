import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalProvider } from '@/hooks/context/global'
import { proprietesTheme } from '../styles/stylesTheme'
import { ThemeProvider } from 'styled-components'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={proprietesTheme}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  )
}
