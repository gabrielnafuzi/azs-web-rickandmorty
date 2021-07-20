import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: var(--shadow);
  border-radius: var(--roundness);
  display: flex;
  flex-direction: column;
  margin: 1rem auto;

  transition: 0.2s ease all;

  img {
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 26.1rem;
    border-top-left-radius: var(--roundness);
    border-bottom-left-radius: var(--roundness);
  }

  .infos {
    width: 100%;
    max-width: 50rem;
    padding: 1.4rem;
  }

  &:hover {
    transform: scale(1.01);
  }

  @media (min-width: 32rem) {
    img {
      width: 36rem;
    }

    flex-direction: row;
    max-width: 50rem;
    max-height: 22.6rem;
  }
`
