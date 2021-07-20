import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useEpisodes } from '@/hooks/episodes'

import { EpisodeTemplate } from '@/components/templates/EpisodeTemplate'

export const Episode = () => {
  const { episodeId } = useParams<{ episodeId: string }>()
  const { getEpisodeById } = useEpisodes()

  useEffect(() => {
    getEpisodeById(Number(episodeId))
  }, [])

  return <EpisodeTemplate />
}

export default Episode
