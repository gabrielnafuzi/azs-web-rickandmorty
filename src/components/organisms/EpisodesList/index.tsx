import React from 'react'
import { useHistory } from 'react-router-dom'

import { BaseContainer } from '@/components/bosons/BaseContainer'
import { BaseCard } from '@/components/molecules/BaseCard'
import { CardsGrid } from '@/components/bosons/CardsGrid'
import { EpisodeInfos } from '@/components/molecules/EpisodeInfos'
import { EpisodeActions } from '@/components/molecules/EpisodeActions'
import { Spinner } from '@/components/atoms/Spinner'
import { Pagination } from '@/components/molecules/Pagination'

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

  const handleNavigateToEpisode = (episodeId: number | string) => {
    history.push(`/episodes/${episodeId}`)
  }

  return (
    <BaseContainer>
      <Pagination />

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {episodes.length ? (
            <CardsGrid>
              {episodes.map(episode => (
                <S.EpisodeCard
                  onClick={() => handleNavigateToEpisode(episode.id)}
                  key={episode.id}>
                  <BaseCard imgSrc={getRandomCharacterImage(episode)}>
                    <EpisodeInfos episode={episode} />
                    <EpisodeActions episode={episode} />
                  </BaseCard>
                </S.EpisodeCard>
              ))}
            </CardsGrid>
          ) : (
            <S.NoEpisodesMessage>
              Nenhum episódio encontrado...
            </S.NoEpisodesMessage>
          )}
        </>
      )}
    </BaseContainer>
  )
}
