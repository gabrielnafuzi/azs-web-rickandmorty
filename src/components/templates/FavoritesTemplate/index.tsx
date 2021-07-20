import React from 'react'

import { GoBackButton } from '@/components/atoms/GoBackButton'
import { BaseContainer } from '@/components/bosons/BaseContainer'
import { FavoritesEpisodesList } from '@/components/organisms/FavoritesEpisodesList'

import * as S from './styles'

export const FavoritesTemplate = () => {
  return (
    <BaseContainer>
      <S.Container>
        <GoBackButton />

        <h1>Meus episódios favoritos</h1>

        <FavoritesEpisodesList />
      </S.Container>
    </BaseContainer>
  )
}
