import React from 'react'

import { useEpisodes } from '@/hooks/episodes'

import * as S from './styles'

export const EpisodeDetails = () => {
  const { episode } = useEpisodes()

  return (
    <S.Container>
      <h1>{episode.name || '...'}</h1>

      <ul>
        <li>
          Número do episódio:
          <span className="hightlight-text">{episode.episode || '...'}</span>
        </li>

        <li>
          Foi ao ar em:
          <span className="hightlight-text">{episode.air_date || '...'}</span>
        </li>
      </ul>
    </S.Container>
  )
}
