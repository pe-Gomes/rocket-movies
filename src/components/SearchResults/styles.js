import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  position: absolute;
  top: 124px;

  padding: 0 16px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({theme})=> theme.COLORS.GRAY_400};
  border-radius: 10px;

  > strong {
    color: ${({theme})=> theme.COLORS.PINK};
    margin: 8px 0;
  }
  > a {
    color: ${({theme})=> theme.COLORS.WHITE};
  }
`