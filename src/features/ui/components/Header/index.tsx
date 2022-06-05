import Link from 'next/link'
import React from 'react'

import { Nav, NavList, ListItem } from './styled'

import { Routes } from '../../constants/routes'
import { Logo } from '../Logo'

export function Header() {
  return (
    <Nav>
      <Link href={Routes.HOME}>
        <a aria-label="Home">
          <Logo height="3rem" />
        </a>
      </Link>
      <NavList>
        <ListItem>
          <Link href={Routes.RELEASES}>
            <a>Releases</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={Routes.ARTISTS}>
            <a>Artists</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={Routes.EVENTS}>
            <a>Events</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={Routes.BLOG}>
            <a>Blog</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={Routes.ABOUT}>
            <a>About</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={Routes.CONTACTS}>
            <a>Contacts</a>
          </Link>
        </ListItem>
      </NavList>
    </Nav>
  )
}
