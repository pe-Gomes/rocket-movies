import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${({theme})=> theme.COLORS.PINK};
  color: ${({theme})=> theme.COLORS.BACKGROUND_900};

  padding: 0 32px;
  height: 56px;

  border-radius: 8px;
  border: none;
  
  > svg {
    color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    font-size: 16px;
  }
`;