import React from 'react'

import { Hero } from '~/features/ui/components/Hero'
import { Layout } from '~/features/ui/components/Layout/LayoutCommon'

export function HomePage() {
  return (
    <Layout title="Home" hideTitle>
      <Hero
        title="Circle Collective"
        description="Explore the best collection of music, curated by artists you love, to find your new jam."
        buttonText="Join Now"
      />
    </Layout>
  )
}
