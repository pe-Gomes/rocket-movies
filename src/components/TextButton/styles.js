import styled from "styled-components";

export const Container = styled.div`
  color: ${({theme}) => theme.COLORS.PINK};
  font-size: 16px;
  font-weight: 400;

  display: flex;
  align-items: center;

  > svg {
    margin-right: 8px;
  }
`;