import Head from 'next/head'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default function Home() {
  return (
    <>

      <Head>
        <title>Index</title>
      </Head>

      <Layout>
        <h1 css={css`
          font-size: 4rem;
          font-family: ${inter.style.fontFamily};
        `}>NextJS + Emotion boilerplate! 👩‍🎤</h1>
      </Layout>

    </>
  )
}
