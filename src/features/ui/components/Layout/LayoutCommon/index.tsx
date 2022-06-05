import React from 'react'

import { Container } from '~/features/ui/components/Container/styled'
import { Header } from '~/features/ui/components/Header'

import { H1 } from './styled'

type Props = {
  title: string
  hideTitle?: boolean
  children: React.ReactNode
}

export function Layout({ title, children, hideTitle }: Props) {
  return (
    <>
      <Header />
      <Container>
        <H1 hidden={hideTitle}>{title}</H1>
        {children}
      </Container>
    </>
  )
}
