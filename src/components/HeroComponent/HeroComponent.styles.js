import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from './../../globalStyles';

export const HeroSectionContainer = styled.div`
  height: 41.8rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 9px solid ${theme.primaryColor};
  margin-top: 6rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  @media screen and (max-width: 900px) {
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 15rem;
  margin-left: 20rem;

  @media screen and (max-width: 1200px) {
    margin-left: 10rem;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 7rem;
  }

  @media screen and (max-width: 900px) {
    margin-top: 0rem;
    margin-left: 0rem;
    padding: 0 1rem;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.4rem;

  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  margin-bottom: 5rem;
  line-height: 2.5rem;

  @media screen and (max-width: 600px) {
    text-align: center;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const Button = styled(Link)`
  border-radius: 30px;
  padding: 9px 3.9rem;
  font-weight: 600;
  background: ${theme.primaryColor};
  box-shadow: 0 0px 6px 1px ${theme.primaryColor};
  color: ${theme.textColor};
  font-size: 2.4rem;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
    padding: 9px 1.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Image = styled.img`
  width: 100%;
  height: 41rem;

  @media screen and (max-width: 900px) {
    height: 100%;
    width: 50%;
  }
`;
