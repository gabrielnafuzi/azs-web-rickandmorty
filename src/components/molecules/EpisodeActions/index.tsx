import React, { useState, useCallback } from 'react'

import { useFavorites } from '@/hooks/favorites'
import { useVieweds } from '@/hooks/viewed'

import type { Episode } from '@/types'

import * as S from './styles'

type Props = {
  episode: Episode
}

export const EpisodeActions = ({ episode }: Props) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const { vieweds, addViewed, removeViewed } = useVieweds()

  const [isFavorite, setIsFavorite] = useState(() =>
    favorites.some(favorite => favorite === episode.id)
  )

  const [isViewed, setIsViewed] = useState(() =>
    vieweds.some(viewed => viewed === episode.id)
  )

  const handleFavorite = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation()

      addFavorite(episode.id)

      setIsFavorite(!isFavorite)
    },
    [addFavorite, episode.id, isFavorite]
  )

  const handleUnFavorite = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation()

      removeFavorite(episode.id)

      setIsFavorite(!isFavorite)
    },
    [removeFavorite, episode.id, isFavorite]
  )

  const handleViewed = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation()

      addViewed(episode.id)

      setIsViewed(!isViewed)
    },
    [addViewed, episode.id, isViewed]
  )

  const handleUnViewed = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation()

      removeViewed(episode.id)

      setIsViewed(!isViewed)
    },
    [removeViewed, episode.id, isViewed]
  )

  return (
    <S.Container>
      <S.ViewedInputWrapper onClick={isViewed ? handleUnViewed : handleViewed}>
        <input
          type="checkbox"
          id="viewed"
          checked={isViewed}
          onChange={() => {}}
        />
        <span>Visto</span>
      </S.ViewedInputWrapper>

      <S.FavoriteButton
        onClick={isFavorite ? handleUnFavorite : handleFavorite}
        isFavorite={isFavorite}>
        {isFavorite ? <S.IoCheckmarkIcon /> : <S.IoHeartIcon />}

        <span>{isFavorite ? 'Favoritado' : 'Favoritar'}</span>
      </S.FavoriteButton>
    </S.Container>
  )
}
