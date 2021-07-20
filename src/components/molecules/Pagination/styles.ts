import styled from 'styled-components'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  justify-content: flex-end;
  padding-right: 3rem;

  button {
    cursor: pointer;

    svg {
      width: 3.6rem;
      height: 3.6rem;
    }

    &:hover {
      > svg > path {
        color: var(--green);
      }
    }
  }

  span {
    text-align: center;
    font-size: 2.45rem;
    margin: 0 0.6rem;
    cursor: pointer;
    user-select: none;

    &:hover,
    &.active {
      color: var(--green);
    }
  }
`

export const IoChevronBackIcon = styled(IoChevronBack)``
export const IoChevronForwardIcon = styled(IoChevronForward)``
