import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  max-width: 783px;
  margin: 40px auto;

  > header {
    margin: 24px 0 40px;
    width: fit-content;
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  gap: 40px;

  margin-bottom: 40px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
`;

export const NewTag = styled.div`
  
  background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};
  border-radius: 8px;

  padding: 16px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 16px;


  > div:nth-child(3n + 1) {
    grid-column: 1;
  }

`;

export const Submit = styled.div`
  width: 50%;
  margin: 0 auto;

  display: flex;
  gap: 40px;

  margin-top: 40px;

  button:first-child {
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};
    color: ${({theme})=>theme.COLORS.PINK};
  }
`;

export const Return = styled(Link)`
`

