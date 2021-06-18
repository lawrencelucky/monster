import styled from 'styled-components';

import { theme } from './../../globalStyles';

export const AboutMonsterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0;
  background: ${theme.secondaryBgColor};
`;

export const Header = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 3rem;

  span {
    color: ${theme.primaryColor};
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
`;

export const CardContainer = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Card = styled.div`
  width: 37.5rem;
  height: 12rem;
  padding: 1rem;
  border: 1px solid ${theme.primaryColor};
  border-radius: 5px;

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

export const CardHeader = styled.h2`
  color: ${theme.primaryColor};
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const CardBody = styled.p`
  font-size: 1.8rem;
  line-height: 2.5rem;
`;
