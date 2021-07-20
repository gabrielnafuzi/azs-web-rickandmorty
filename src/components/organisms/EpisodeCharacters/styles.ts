import styled from 'styled-components'

import { Status } from '@/types'

type CharacterInfoProps = {
  status: Status
}

export const Container = styled.div`
  margin-top: 4.7rem;

  h2 {
    font-size: 2.6rem;
  }
`

export const CharactersWrapper = styled.div`
  margin-top: 1rem;
`

export const CharacterInfo = styled.div<CharacterInfoProps>`
  h3 {
    font-size: 2.6rem;
    font-weight: bold;
  }

  ul {
    margin-top: 1rem;
  }

  li {
    font-size: 2rem;
    margin-bottom: 0.7rem;
    font-weight: 600;

    > span {
      margin-left: 0.6rem;
      font-weight: normal;

      &.status {
        color: var(${({ status }) => `--${status.toLowerCase()}-status`});
      }
    }
  }
`
