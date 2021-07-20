import styled from 'styled-components'

export const Container = styled.div`
  h2 {
    font-weight: bold;
    font-size: 2.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 24rem;
  }

  ul {
    margin-top: 1rem;
  }

  li {
    font-size: 1.65rem;
    font-weight: 600;
    margin-bottom: 0.6rem;

    > span {
      font-weight: normal;
      margin-left: 0.4rem;
    }
  }
`
