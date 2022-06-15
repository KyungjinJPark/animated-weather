// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  #main {
    background: ${({ theme }) => theme.bgCol};
    color: ${({ theme }) => theme.textCol};
    transition: all 0.2s linear;
  }
  
  .change-button {
    background-color: ${({ theme }) => theme.btnCol};
  }

  .clickable:hover {
    background-color: ${({ theme }) => theme.btnHoverCol};
  }
  
  .main-temperature {
    color: ${({ theme }) => theme.temperatureCol};
  }

  .selected {
    background-color: ${({ theme }) => theme.selectedCol};
  }
`;