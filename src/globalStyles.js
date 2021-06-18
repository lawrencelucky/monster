import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const theme = {
  backgroundColor: '#000000',
  secondaryBgColor: '#1A1A1A',
  textColor: '#ffffff',
  primaryColor: '#00AD90',
  secondaryColor: '#F0B90B',
};

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html {
    font-size: 62.5%;

    @media screen and (max-width: 1366px) {
        font-size: 59%;
    }
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  letter-spacing: 1px;
  line-height: 16px;
  font-weight: 300;
  background-color: ${theme.backgroundColor};
  color: ${theme.textColor};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: 0;
}
`;

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const fadeIn = keyframes`
0% {
  opacity: 0;
}
25% {
  opacity: 0.25;
}
50% {
  opacity: 0.5;
}
75% {
  opacity: 0.75;
}
100% {
  opacity: 1;
}
`;

export default GlobalStyle;
