import styled from 'styled-components';

export const Container = styled.div`
  #Rectangle {
    transform-origin: center bottom;
    animation: animate 3s linear infinite;
  }
  @keyframes animate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5%) translateZ(0) scaleY(0.55);
    }
    100% {
      transform: translateY(0%) translateZ(0) scaleY(1);
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #7159c1;
  font-family: Arial, Helvetica, sans-serif;
`;
