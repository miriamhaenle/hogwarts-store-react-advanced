import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  background: #764248;
  color: white;
  font-family: sans-serif;
  font-size: 1.25rem;
  margin: 0;
  padding: 0%;
}

select,
  input {
    padding: 0.4rem;
    border-radius: 5px;
    font-size: 1.2rem;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }
`;
