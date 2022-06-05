import styled from 'styled-components'

import { colors } from './../../theme/colors'

export const H2 = styled.h2`
  font-size: 8rem;
  font-weight: 500;
  letter-spacing: 0.02em;
`
export const P = styled.p`
  font-size: 1.625rem;
  font-weight: 300;
  color: ${colors.text.secondary};
`

export const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
`
