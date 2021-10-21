import { createGlobalStyle } from 'styled-components';
import ZCOOLKuaiLe from './ZCOOLKuaiLe-Regular.ttf';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'ZCOOLKuaiLe';
    src: local('ZCOOLKuaiLe'), local('ZCOOLKuaiLe'),
    url(${ZCOOLKuaiLe}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
html {
  box-sizing: border-box;
}

*, *::after, *::before {
  box-sizing: inherit;
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}

a, button {
  font-family: 'Roboto', sans-serif;
}
`;
