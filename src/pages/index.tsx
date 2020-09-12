import Head from 'next/head'
import { Layout } from '@components';

export default function Home() {
  return (
    <Layout title="Home">
      <Layout.Main>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World!</h1>
      </Layout.Main>
    </Layout>
  )
}
