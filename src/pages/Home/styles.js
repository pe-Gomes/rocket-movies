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
    padding: 40px 124px 40px;
    margin: 0 auto;

    width: 100%;

    overflow-y: auto;

    > div:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 40px;

      button {
        max-width: 215px;
      }
    }
  }

`;

export const Movies = styled.div`
  padding: 32px;
  border-radius: 16px;

  background-color: ${({theme})=> theme.COLORS.BACKGROUND_600};

  :nth-child(n) {
    margin-top: 24px;
  }

  > a {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;

    color: ${({theme})=> theme.COLORS.WHITE};
  }

  > p {
    margin-bottom: 15px;
  }

  > span {
    background-color: ${({theme})=> theme.COLORS.GRAY_400};
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 6px;

  margin-bottom: 15px;
`;

export const NewItem = styled(Link)`

`;