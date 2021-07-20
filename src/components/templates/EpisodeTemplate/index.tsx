import React from 'react'

import { GoBackButton } from '@/components/atoms/GoBackButton'
import { BaseContainer } from '@/components/bosons/BaseContainer'

import { EpisodeDetails } from '@/components/organisms/EpisodeDetails'
import { EpisodeCharacters } from '@/components/organisms/EpisodeCharacters'

import * as S from './styles'

export const EpisodeTemplate = () => {
  return (
    <BaseContainer>
      <S.Container>
        <GoBackButton />

        <EpisodeDetails />
        <EpisodeCharacters />
      </S.Container>
    </BaseContainer>
  )
}
