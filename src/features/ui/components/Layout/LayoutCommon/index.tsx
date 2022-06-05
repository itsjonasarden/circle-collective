import React from 'react'

import { Header } from '~/features/ui/components/Header'

import { Container } from '../../Container/styled'

type Props = {
  title: string
  children: React.ReactNode
}

export function Layout({ title, children }: Props) {
  return (
    <>
      <Header />
      <Container>
        <h1>{title}</h1>
        {children}
      </Container>
    </>
  )
}
