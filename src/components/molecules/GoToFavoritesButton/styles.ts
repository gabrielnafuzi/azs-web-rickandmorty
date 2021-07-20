import styled from 'styled-components'
import { IoHeart } from 'react-icons/io5'

export const Container = styled.button`
  width: 22rem;
  height: 4rem;
  border-radius: var(--roundness);
  box-shadow: var(--shadow);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 3;
  right: 2.4rem;
  bottom: 2.4rem;
  background-color: var(--red);

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
  }

  > span {
    color: var(--text-white);
    font-weight: 600;
    font-size: 1.6rem;
  }
`

export const IoHeartIcon = styled(IoHeart)``
