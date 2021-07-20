import React from 'react'
import { useHistory } from 'react-router-dom'

import { BaseContainer } from '@/components/bosons/BaseContainer'
import { BaseCard } from '@/components/molecules/BaseCard'
import { CardsGrid } from '@/components/bosons/CardsGrid'
import { EpisodeInfos } from '@/components/molecules/EpisodeInfos'
import { EpisodeActions } from '@/components/molecules/EpisodeActions'
import { Spinner } from '@/components/atoms/Spinner'

import { useFavorites } from '@/hooks/favorites'
import type { Episode } from '@/types'

import * as S from './styles'

export const FavoritesEpisodesList = () => {
  const history = useHistory()

  const { favoritesWithData, isLoading } = useFavorites()

  const getRandomCharacterImage = (episode: Episode) => {
    const index = Math.floor(Math.random() * episode.characters.length)

    return episode.characters[index].image
  }

  const handleNavigateToEpisode = (episodeId: number | string) => {
    history.push(`/episodes/${episodeId}`)
  }

  if (isLoading) return <Spinner />

  return (
    <BaseContainer>
      <div style={{ marginTop: '4rem' }}>
        {favoritesWithData.length ? (
          <CardsGrid>
            {favoritesWithData.map(favorite => (
              <S.EpisodeCard
                onClick={() => handleNavigateToEpisode(favorite.id)}
                key={favorite.id}>
                <BaseCard imgSrc={getRandomCharacterImage(favorite)}>
                  <EpisodeInfos episode={favorite} />
                  <EpisodeActions episode={favorite} />
                </BaseCard>
              </S.EpisodeCard>
            ))}
          </CardsGrid>
        ) : (
          <S.NoFavoritesMessage>
            Nenhum episódio favorito até o momento...
          </S.NoFavoritesMessage>
        )}
      </div>
    </BaseContainer>
  )
}
