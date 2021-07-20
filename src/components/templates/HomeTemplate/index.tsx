import React from 'react'

import { Header } from '@/components/organisms/Header'
import { EpisodesList } from '@/components/organisms/EpisodesList'

export const HomeTemplate = () => {
  return (
    <>
      <Header />

      <EpisodesList />
    </>
  )
}
