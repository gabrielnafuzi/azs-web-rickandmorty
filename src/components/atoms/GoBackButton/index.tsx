import React from 'react'
import { useHistory } from 'react-router-dom'

import * as S from './styles'

export const GoBackButton = () => {
  const history = useHistory()

  const handleGoBack = () => {
    history.goBack()
  }

  return (
    <S.Container onClick={handleGoBack}>
      <S.IoArrowBackIcon />

      <span>Voltar para listagem de episódios</span>
    </S.Container>
  )
}
