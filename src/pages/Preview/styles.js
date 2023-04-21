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
    padding: 40px 112px 156px;

    margin: 0 auto;

    max-width: 1400px;

    overflow-y: auto;

    > p {
      margin-top: 40px;
      
      text-align: justify;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }

`;

export const Return = styled(Link)`
  background: none;
  border: none;

  padding-bottom: 24px;
`;

export const MovieText = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;

  min-height: 36px;

  margin-bottom: 24px;

  > h2 {
    display: inline-block;
    font-size: 36px;
    font-weight: 500;
  }

`;

export const Stars = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  bottom: -6px;
  `;

export const UserPost = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  margin-bottom: 40px;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  > svg {
    font-size: 16px;
    color: ${({theme})=> theme.COLORS.PINK};
  }
`;