import React, { useEffect } from 'react'

import { useEpisodes } from '@/hooks/episodes'

import { HomeTemplate } from '@/components/templates/HomeTemplate'

export const Home = () => {
  const { getEpisodes } = useEpisodes()

  useEffect(() => {
    getEpisodes()
  }, [])

  return <HomeTemplate />
}
