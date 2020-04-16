import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Staatliches&display=swap');
  font-family: 'Fredoka One', cursive;
  -webkit-font-smoothing: antialiased;
  align-items: center;

  footer {
    margin: auto;
    font-family: 'Roboto';
    text-align: center;

  }

  .card {
    position: absolute;
    left: 10%;
    top: 10%;
    h1 {
      color: #b7efcd;
      font-size: 50px;
    }
    small {
      color: #faf4ff;
      font-size: 20px;
      transform: rotate(90deg);
    }
    fo
  }
  #Rectangle {
    transform-origin: center bottom;
    animation: animate 10s linear infinite;
  }
  #Vector {
    transform-origin: center bottom;
    animation: animate2 6s linear infinite;
  }
  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0);
    }
    50% {
      transform: translateY(-10%) translateZ(0) scaleY(0.55) rotate(-5deg);
    }
    70% {
      transform: rotate(5deg);
    }
    100% {
      transform: translateY(0%) translateZ(0) scaleY(1);
    }
  }
  @keyframes animate2 {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-1%) translateZ(0) rotate(1deg);
    }
    70% {
      transform: translateY(-2%) translateZ(0) rotate(-2deg);
    }
    100% {
      transform: translateY(0%) translateZ(0);
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #7159c1;
  font-family: Arial, Helvetica, sans-serif;
`;
