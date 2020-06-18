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
    background: #f0f0f0;
  }
  .container {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin-left: 10%;
    z-index: 1000;
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

  .content:nth-child(1) {
    background-image: radial-gradient( circle 830px at 95.6% -5%,  rgba(247,189,2,1) 0%, rgba(228,118,0,1) 90% );
  }
  .content:nth-child(2) {
    background-image: radial-gradient( circle 830px at 95.6% -5%,  rgba(244,89,128,1) 0%, rgba(223,23,55,1) 90% );
  }
  .content:nth-child(3) {
    background-image: radial-gradient( circle 939px at 94.7% 50%,  rgba(0,178,169,1) 0%, rgba(0,106,101,1) 76.9% );
  }
  .content:nth-child(4) {
    background: linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%);
  }
`;
