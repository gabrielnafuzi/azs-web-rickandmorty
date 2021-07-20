import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5'

export const Container = styled.form`
  width: 60rem;
  height: 5rem;
  background-color: var(--background);
  border-radius: var(--roundness);
  padding: 1.5rem;
  display: flex;

  align-items: center;

  input {
    width: 80%;
    height: 100%;
    font-size: 2.2rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--placeholder-color);
    }
  }

  .icon-wrapper {
    width: 5rem;
    height: 100%;
    margin-right: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 3rem;
    height: 3rem;
    fill: var(--placeholder-color);
  }
`

export const IoSearchIcon = styled(IoSearch)``
