import styled from 'styled-components'
import backgroundImage from '@/assets/rick_and_morty_header.png'

export const Container = styled.header`
  width: 100%;
  height: 28rem;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`
