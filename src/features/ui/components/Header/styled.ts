import styled from 'styled-components'

import { mq, ScreenSize } from '~/features/ui/theme/mq'

import { colors } from './../../theme/colors'

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7.5rem;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: ${ScreenSize.large / 10} rem;
  box-sizing: border-box;

  ${mq.medium} {
    padding: 0 2rem;
  }
  ${mq.large} {
    padding: 0 4rem;
  }
`

export const NavList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  list-style: none;
  gap: 4.8rem;
`
export const ListItem = styled.li`
  font-size: 1.25rem;
  line-height: 2rem;
  color: ${colors.text.secondaryDark};
  a {
    &:hover,
    &:focus,
    &:active {
      color: ${colors.text.primary};
    }
  }
`
