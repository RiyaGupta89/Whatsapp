import Head from 'next/head'
import Sidebar from './Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp</title>
        <meta name="description" content="Building the chatting app whatsapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
      <Sidebar />
        

    </div>
  )
}
