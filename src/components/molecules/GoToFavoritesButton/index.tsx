import React from 'react'
import { useHistory } from 'react-router-dom'

import * as S from './styles'

export const GoToFavoritesButton = () => {
  const history = useHistory()

  const handleNaviteToFavorites = () => {
    history.push('/favorites')
  }

  return (
    <S.Container onClick={handleNaviteToFavorites}>
      <S.IoHeartIcon />

      <span>Ver episódios favoritos</span>
    </S.Container>
  )
}
