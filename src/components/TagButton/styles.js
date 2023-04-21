import styled from "styled-components";

export const Container = styled.button`
  border: ${({theme, isActive})=> isActive ? "none" : `dashed 1px ${theme.COLORS.GRAY_300}`};

  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 8px;
  
  background-color: ${({theme, isActive})=> isActive ? theme.COLORS.GRAY_400 : "transparent"};

  color:  ${({theme}) => theme.COLORS.WHITE};
  font-size: 16px;

  display: flex;
  align-items: center;
  

  > svg {
    margin-left: 16px;

    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 24px;

    position: relative;
    bottom: ${({isActive})=> isActive ? "-2.25px" : 0};

  }
`;