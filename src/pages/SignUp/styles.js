import styled from 'styled-components';

import { Link } from 'react-router-dom';

import backgroundImg from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: stretch;

`;

export const Form = styled.div`
  padding: 0 224px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 3rem;
    font-weight: 700;
    
    color: ${({theme})=>theme.COLORS.PINK};

    margin: 8px;
  }

  > p {
    font-size: 1rem;
    color: ${({theme})=>theme.COLORS.GRAY_200};
  }

  > h2 {
    margin: 48px 0;

    font-size: 2rem;
    font-weight: 500;
  }

  > button {
    margin: 24px 0 42px;
  }

  > a {
    color: ${({theme})=>theme.COLORS.PINK};
    font-size: 16px;
    font-weight: 400;
  }

`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat;
  filter: brightness(0.65);
  background-size: cover;
`;

export const Return = styled(Link)`
  background: none;
  border: none;
  
  > svg {
    width: 16px;
    height: 16px;
  }
`;