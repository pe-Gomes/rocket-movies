import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 8px;
    background: none;
  }


  *::-webkit-scrollbar-thumb {
    background-color: ${({theme})=> theme.COLORS.PINK };
    outline: 1px solid ${({theme})=> theme.COLORS.BACKGROUND_600};

    border-radius: 8px;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }
  


  body, input, button, textarea, span, strong {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  img {
    border: 1px solid ${({theme})=> theme.COLORS.GRAY_300};
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;