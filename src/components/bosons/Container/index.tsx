import React, { ReactNode } from 'react'

import * as S from './styles'

type Props = {
  children: ReactNode
}

export const Container = ({ children, ...rest }: Props) => {
  return <S.Container {...rest}>{children}</S.Container>
}
