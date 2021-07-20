import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import * as S from './styles'

export const GoToFavoritesButton = () => {
  const history = useHistory()
  const match = useRouteMatch('/favorites')

  const handleNaviteToFavorites = () => {
    history.push('/favorites')
  }

  if (match) return null

  return (
    <S.Container onClick={handleNaviteToFavorites}>
      <S.IoHeartIcon />

      <span>Ver episódios favoritos</span>
    </S.Container>
  )
}
