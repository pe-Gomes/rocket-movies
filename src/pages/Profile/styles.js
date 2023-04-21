import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
`;

export const Return = styled(Link)`
    width: 100%;
    height: 144px;

    background: ${({theme})=>theme.COLORS.BACKGROUND_600};

    display: flex;
    align-items: center;

    padding: 0 146px;
`;

export const Form = styled.div`
  max-width: 340px;
  margin: 64px auto 0;

  div:nth-child(4) {
    margin-top: 24px;
  }
  
  div:nth-child(5) {
    margin-bottom: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -162px auto 64px;
  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    border-color: ${({theme})=>theme.COLORS.GRAY_300};
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({theme})=>theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;
  }

  > label:hover {
    filter: brightness(0.9);
  }

  input {
    display: none;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({theme})=>theme.COLORS.GRAY_400};
  }
`;