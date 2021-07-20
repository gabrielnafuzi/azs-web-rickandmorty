import styled from 'styled-components'
import { IoArrowBack } from 'react-icons/io5'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  > svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  > span {
    font-size: 2rem;
    font-weight: 600;
  }

  &:hover {
    > span {
      text-decoration: underline;
    }
  }
`

export const IoArrowBackIcon = styled(IoArrowBack)``
