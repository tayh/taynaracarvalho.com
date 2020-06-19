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
    font-family: 'Raleway', sans-serif;
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
  .title {
    padding-top: 100px;
    padding-left: 100px;
    width: 700px;
    position: absolute;
  }
`;
