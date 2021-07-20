import React from 'react'

import type { Episode } from '@/types'

import * as S from './styles'

type Props = {
  episode: Episode
}

export const EpisodeInfos = ({ episode }: Props) => {
  return (
    <S.Container>
      <h2>{episode.name}</h2>

      <ul>
        <li>
          Número do episódio:
          <span className="hightlight-text">{episode.episode}</span>
        </li>

        <li>
          Foi ao ar em:
          <span className="hightlight-text">{episode.air_date}</span>
        </li>

        <li>
          Quantidade de personagens:
          <span className="hightlight-text">{episode.characters.length}</span>
        </li>
      </ul>
    </S.Container>
  )
}
