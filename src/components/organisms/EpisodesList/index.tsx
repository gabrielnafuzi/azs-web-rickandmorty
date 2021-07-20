import React from 'react'

import { Container } from '@/components/bosons/Container'
import { BaseCard } from '@/components/molecules/BaseCard'
import { CardsGrid } from '@/components/bosons/CardsGrid'
import { EpisodeInfos } from '@/components/molecules/EpisodeInfos'
import { EpisodeActions } from '@/components/molecules/EpisodeActions'
import { Spinner } from '@/components/atoms/Spinner'

import { useEpisodes } from '@/hooks/episodes'
import type { Episode } from '@/types'

export const EpisodesList = () => {
  const { episodes, isLoading } = useEpisodes()

  const getRandomCharacterImage = (episode: Episode) => {
    const index = Math.floor(Math.random() * episode.characters.length)

    return episode.characters[index].image
  }

  if (isLoading) return <Spinner />

  return (
    <Container>
      <div style={{ marginTop: '4rem' }}>
        <CardsGrid>
          {episodes.length
            ? episodes.map(episode => (
                <BaseCard
                  imgSrc={getRandomCharacterImage(episode)}
                  key={episode.id}>
                  <EpisodeInfos episode={episode} />
                  <EpisodeActions episode={episode} />
                </BaseCard>
              ))
            : null}
        </CardsGrid>
      </div>
    </Container>
  )
}
