import React, { useState, useCallback } from 'react'

import { useFavorites } from '@/hooks/favorites'

import type { Episode } from '@/types'

import * as S from './styles'

type Props = {
  episode: Episode
}

export const EpisodeActions = ({ episode }: Props) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites()

  const [isFavorite, setIsFavorite] = useState(() => {
    const isAlreadyFavorite = favorites.some(
      favorite => favorite === episode.id
    )

    return isAlreadyFavorite
  })

  const handleFavorite = useCallback(() => {
    addFavorite(episode.id)

    setIsFavorite(!isFavorite)
  }, [addFavorite, episode.id, isFavorite])

  const handleUnFavorite = useCallback(() => {
    removeFavorite(episode.id)

    setIsFavorite(!isFavorite)
  }, [episode.id, isFavorite, removeFavorite])

  return (
    <S.Container>
      <S.ViewedInputWrapper>
        <input type="checkbox" id="viewed" />
        <label htmlFor="viewed">Visto</label>
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
