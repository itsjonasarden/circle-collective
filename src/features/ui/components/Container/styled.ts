import styled from 'styled-components'

import { mq, ScreenSize } from '../../theme/mq'

export const Container = styled.section`
  margin: 0 auto;
  padding: 0;
  max-width: ${ScreenSize.large / 10} rem;
  box-sizing: content-box;

  ${mq.medium} {
    padding: 7.5rem 2rem;
  }
  ${mq.large} {
    padding: 7.5rem 4rem;
  }
`
