import styled from "styled-components";

export const Container = styled.span`
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 8px;
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  color:  ${({theme}) => theme.COLORS.WHITE};
  font-size: 12px;
  font-weight: 400;
  

  > svg {
    margin-left: 16px;

    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 24px;

    position: relative;
    bottom: -7px;

  }
`;