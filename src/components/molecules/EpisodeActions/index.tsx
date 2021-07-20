import React from 'react'

import * as S from './styles'

export const EpisodeActions = () => {
  const isFavorite = false

  return (
    <S.Container>
      <S.ViewedInputWrapper>
        <input type="checkbox" id="viewed" />
        <label htmlFor="viewed">Visto</label>
      </S.ViewedInputWrapper>

      <S.FavoriteButton isFavorite={isFavorite}>
        {isFavorite ? <S.IoCheckmarkIcon /> : <S.IoHeartIcon />}

        <span>{isFavorite ? 'Favoritado' : 'Favoritar'}</span>
      </S.FavoriteButton>
    </S.Container>
  )
}
