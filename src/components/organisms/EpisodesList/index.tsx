import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from '@/components/bosons/Container'
import { BaseCard } from '@/components/molecules/BaseCard'
import { CardsGrid } from '@/components/bosons/CardsGrid'
import { EpisodeInfos } from '@/components/molecules/EpisodeInfos'
import { EpisodeActions } from '@/components/molecules/EpisodeActions'
import { Spinner } from '@/components/atoms/Spinner'

import { useEpisodes } from '@/hooks/episodes'
import type { Episode } from '@/types'

import * as S from './styles'

export const EpisodesList = () => {
  const history = useHistory()

  const { episodes, isLoading } = useEpisodes()

  const getRandomCharacterImage = (episode: Episode) => {
    const index = Math.floor(Math.random() * episode.characters.length)

    return episode.characters[index].image
  }

  const handleNavigateToEpisode = (episodeId: number) => {
    history.push(`/episodes/${episodeId}`)
  }

  if (isLoading) return <Spinner />

  return (
    <Container>
      <div style={{ marginTop: '4rem' }}>
        <CardsGrid>
          {episodes.length
            ? episodes.map(episode => (
                <S.EpisodeCard
                  onClick={() => handleNavigateToEpisode(episode.id)}
                  key={episode.id}>
                  <BaseCard imgSrc={getRandomCharacterImage(episode)}>
                    <EpisodeInfos episode={episode} />
                    <EpisodeActions episode={episode} />
                  </BaseCard>
                </S.EpisodeCard>
              ))
            : null}
        </CardsGrid>
      </div>
    </Container>
  )
}
