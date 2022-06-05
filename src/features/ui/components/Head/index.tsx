import HeadNext from 'next/head'
import React from 'react'

export function Head() {
  return (
    <HeadNext>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
    </HeadNext>
  )
}
