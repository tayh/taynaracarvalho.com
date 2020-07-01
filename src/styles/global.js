import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    font-family: 'Roboto', sans-serif;
    display: flex;
    background-color : #f5f5f5;
  }
  .container {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin-left: 2%;
    z-index: 1000;
  }
  .container a {
    text-decoration: none;
  }

  @media only screen and (min-width: 768px) {
    .content {
      width: 20em;
      height: 5.625em;
      overflow: visible;
      pointer-events: auto;
      border-radius: 5px;
      color: white;
      line-height: 90px;
      padding-left: 32px;
      font-size: 14.5px;
      background: lightblue;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 5px;
    }
  }
  .content a {
    text-decoration: none;
  }

  .content.content-home {
    background: #342b38
  }
  .content.content-about {
    background: #ff9595
  }
  .content.content-projects {
    background: #80bdab
  }

  @media only screen and (max-width: 600px) {
    .title {
      margin-top: 10%;
      margin-left: 5%;
      width: 350px;
      position: absolute;
      z-index: 5;
    }
  }
  @media only screen and (min-width: 600px){
    .title {
      margin-top: 100px;
      margin-left: 100px;
      width: 600px;
      position: absolute;
      z-index: 5;
    }
  }
  .card-about {
    width: 70%;
    height: 45%;
    background-color: #f5f5f5;
    position: absolute;
    z-index: 0;
    margin-left: 20%;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    border-radius: 5px;
    border-style: solid;
    border-color: #e0e0e0;
    border-width: thin;
    text-align: center;
  }
  .card-about h1 {
    color: #342b38;
    font-size: 40px;
  }
  .card-about p {
    font-size: 25px;
    color: #393e46;
  }
  .card-about svg {
    fill: #342b38;
    padding-right: 10px;
    text-align: center;
  }
  .card-about span {
    display:inline-block;
  }
  .links {
    padding-top: 50px;
    text-align: center;
  }
`;
