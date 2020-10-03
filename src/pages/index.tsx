import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Pravtz | Boilerplate Nextjs - Started</title>
      </Head>

      <main>
        <Wellcome>
          <h1>Wellcome Ederson!</h1>
          <hr />
          <p>This is the start</p>
        </Wellcome>
      </main>

      <footer></footer>
    </div>
  )
}

const Wellcome = styled.div`
  margin: 30vh auto;
  max-width: 350px;
  text-align: center;
  border: 1px solid #99a;
  padding: 20px;
  border-radius: 4px;
  hr {
    background-color: #889;
    border: 1px solid #889;
  }
  h1 {
    color: #335;
  }
  p {
    color: #445;
  }
`

export default Home
