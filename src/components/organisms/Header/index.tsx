import React from 'react'

import { Search } from '@/components/molecules/Search'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <Search />
    </S.Container>
  )
}
