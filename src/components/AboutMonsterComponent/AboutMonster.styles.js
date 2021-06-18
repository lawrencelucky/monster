import styled from 'styled-components';

import { theme } from './../../globalStyles';

export const AboutMonsterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0;
  background: ${theme.secondaryBgColor};

  @media screen and (max-width: 600px) {
    padding: 4rem 0;
  }
`;

export const Header = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 3rem;

  span {
    color: ${theme.primaryColor};
  }

  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const Desc = styled.p`
  font-size: 1.8rem;
  text-align: center;
  width: 90rem;
  line-height: 3rem;
  margin-bottom: 7rem;

  span {
    color: ${theme.primaryColor};
  }

  @media screen and (max-width: 900px) {
    width: 90%;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 37.5rem;
  min-height: 12rem;
  padding: 1rem;
  border: 1px solid ${theme.primaryColor};
  border-radius: 5px;
  margin-top: 3rem;

  &:not(:last-child) {
    margin-right: 3rem;

    @media screen and (max-width: 768px) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const CardHeader = styled.h2`
  color: ${theme.primaryColor};
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const CardBody = styled.p`
  font-size: 1.8rem;
  line-height: 2.5rem;

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;
