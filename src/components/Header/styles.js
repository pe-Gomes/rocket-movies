import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.div`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};

  padding: 0 128px;

  display: flex;
  align-items: center;
  justify-content: center;


  > div {
    min-width: 192px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
`;

export const Brand = styled(Link)`
  color: ${({theme})=> theme.COLORS.PINK};
`;

export const Search =styled.div`
  grid-area: search;
  padding: 0 64px;
  width: 100%;
  
`;

export const Logout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  > strong {
    align-self: flex-end;
  }
  
  > a {
    color: ${({theme})=> theme.COLORS.GRAY_300};
    align-self: flex-end;
  }

`;

export const Profile = styled(Link)`
  border: none;
  background: transparent;
  
  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`;