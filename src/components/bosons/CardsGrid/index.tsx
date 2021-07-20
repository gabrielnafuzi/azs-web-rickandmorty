import React from 'react'
import { ReactNode } from 'react'

import * as S from './styles'

type Props = {
  children: ReactNode
}

export const CardsGrid = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>
}
