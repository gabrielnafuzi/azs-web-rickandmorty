import styled from 'styled-components'

export const Container = styled.div`
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 48px;
    height: 48px;
    margin: 0 auto;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #333;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
