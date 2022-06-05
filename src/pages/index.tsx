import type { NextPage } from 'next'

import { Container } from '~/features/ui/components/Container/styled'
import { Header } from '~/features/ui/components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container />
    </>
  )
}

export default Home
