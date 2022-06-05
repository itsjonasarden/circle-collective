import React from 'react'

import { Divider } from '~/features/ui/components/Divider'
import { Logo } from '~/features/ui/components/Logo'

import { H2, P, Article } from './styled'

import { StyledButton } from '../Button/styled'

type Props = {
  title: string
  description: string
  buttonText: string
}

export function Hero({ title, description, buttonText }: Props) {
  return (
    <Article>
      <H2>{title}</H2>
      <Divider />
      <P>{description}</P>
      <StyledButton>{buttonText}</StyledButton>
      <Logo />
    </Article>
  )
}
