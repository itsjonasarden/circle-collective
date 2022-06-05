import styled from 'styled-components'

import { palette } from '~/features/ui/theme/palette'

export const Divider = styled.hr`
  height: 0.25rem;
  width: 5rem;
  background: ${palette.gradientDivider};
  border: none;
`
