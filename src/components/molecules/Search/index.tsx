import React, { useCallback, useState } from 'react'

import { useEpisodes } from '@/hooks/episodes'
import { debounce } from '@/helpers/debounce'

import * as S from './styles'

export const Search = () => {
  const { getEpisodes } = useEpisodes()

  const [episodeName, setEpisodeName] = useState('')

  const getEpisodeDebounced = useCallback(
    debounce(([searchVal]: string) => {
      getEpisodes({ name: searchVal })
    }, 500),
    []
  )

  const handleOnEpisodeNameChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEpisodeName(target.value)

    getEpisodeDebounced(target.value)
  }

  return (
    <S.Container>
      <div className="icon-wrapper">
        <S.IoSearchIcon />
      </div>

      <input
        type="text"
        placeholder="Busque pelo nome de um episódio..."
        value={episodeName}
        onChange={handleOnEpisodeNameChange}
      />
    </S.Container>
  )
}
