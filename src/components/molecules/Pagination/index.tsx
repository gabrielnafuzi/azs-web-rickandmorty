import React, { useState } from 'react'
import { useEpisodes } from '@/hooks/episodes'

import * as S from './styles'

export const Pagination = () => {
  const { paginationInfo, getEpisodes, currentPage } = useEpisodes()

  const handlePaginate = (page: number | null) => {
    if (page == null || page === currentPage) return

    getEpisodes({ page })
  }

  return (
    <S.Container>
      <button onClick={() => handlePaginate(paginationInfo.prev)}>
        <S.IoChevronBackIcon />
      </button>

      {Array.from({ length: paginationInfo.pages }).map((_, idx) => (
        <span
          className={currentPage === idx + 1 ? 'active' : ''}
          onClick={() => handlePaginate(idx + 1)}
          key={idx}>
          {idx + 1}
        </span>
      ))}

      <button onClick={() => handlePaginate(paginationInfo.next)}>
        <S.IoChevronForwardIcon />
      </button>
    </S.Container>
  )
}
