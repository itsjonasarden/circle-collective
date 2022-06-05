import type { AppProps } from 'next/app'

import { Head } from '~/features/ui/components/Head'
import { GlobalStyle } from '~/features/ui/theme/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
