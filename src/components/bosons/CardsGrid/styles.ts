import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 3rem 1rem;

  @media (min-width: 60rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`
