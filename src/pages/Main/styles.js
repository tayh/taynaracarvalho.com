import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Circular Std';
  align-items: center;
  background-color: #2f3238;
  box-sizing: border-box;

  height: 100% !important;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #7159c1;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Quadrado = styled.div`
  .climacon_componentWrap-sun {
    animation: rotate 10s linear;
    transform-origin: 50% 50%;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(90deg);
    }
    70% {
      transform: rotate(190deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
