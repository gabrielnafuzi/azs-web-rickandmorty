import styled from 'styled-components'
import { IoHeart, IoCheckmark } from 'react-icons/io5'

type FavoriteButtonProps = {
  isFavorite: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ViewedInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: max-content;

  > span {
    font-weight: 600;
    font-size: 1.6rem;
    margin-left: 0.6rem;
    user-select: none;
  }
`

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  margin-top: 1.4rem;
  width: 100%;
  height: 3rem;
  border-radius: var(--roundness);
  box-shadow: var(--shadow);
  background-color: var(${props => (props.isFavorite ? '--green' : '--red')});

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    transform: scale(1.02);
  }

  > svg {
    width: 2rem;
    height: 2rem;
    fill: var(--text-white);
    margin-right: 0.4rem;

    > path {
      color: var(--text-white);
    }
  }

  > span {
    color: var(--text-white);
    font-weight: 600;
    font-size: 1.6rem;
  }
`

export const IoHeartIcon = styled(IoHeart)``
export const IoCheckmarkIcon = styled(IoCheckmark)``
