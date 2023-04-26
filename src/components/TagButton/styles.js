import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  padding-right: 16px;
  
  border: ${({theme, isNew})=> isNew ? `dashed 1px ${theme.COLORS.GRAY_300}` : "none"} ;
  background-color: ${({theme, isNew})=> isNew ? "transparent" : theme.COLORS.GRAY_400};

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;

    background: none;
    border: none;

    color:  ${({theme}) => theme.COLORS.WHITE};
    font-size: 16px;

    &::placeholder {
      color: ${({theme})=> theme.COLORS.GRAY_300};
    }
  }

  > button {
    background: transparent;
    border: none;
    
    > svg {
      color: ${({theme}) => theme.COLORS.PINK};
      font-size: 24px;
  
      position: relative;
      bottom: ${({isNew})=> isNew ? "-2.25px" : 0};
    }
  }

`;