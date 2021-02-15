import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>Exemplo de configuração</h1>
      <p>
        Uma configuração para utilizar com ReactJS + Next.js feita por Mateus
        Kunrath.
      </p>
    </Container>
  )
}

export default Home
