import React, { ReactNode } from 'react'

import * as S from './styles'

type Props = {
  imgSrc: string
  children: ReactNode
}

export const BaseCard = ({ imgSrc, children }: Props) => {
  return (
    <S.Container>
      <div>
        <img src={imgSrc} />
      </div>

      <div className="infos">{children}</div>
    </S.Container>
  )
}
