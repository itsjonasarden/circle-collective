import styled from 'styled-components'

import { AccessibleHidden } from '~/features/ui/components/AccessibleHidden/styled'

type H1Props = {
  hidden?: boolean
}

export const H1 = styled.h1<H1Props>`
  ${(props) => (props.hidden ? AccessibleHidden : '')}
`
