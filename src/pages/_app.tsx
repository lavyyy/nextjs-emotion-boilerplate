import { GlobalStyles } from '@/styles/global'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

import SEO from '../../next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </>

  )
}
