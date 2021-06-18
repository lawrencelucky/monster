import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from './../../globalStyles';

export const HeroSectionContainer = styled.div`
  height: 41.8rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 9px solid ${theme.primaryColor};
  margin-top: 6rem;
`;

export const ContentContainer = styled.div`
  margin-top: 15rem;
  margin-left: 20rem;
`;

export const Heading = styled.h2`
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  margin-bottom: 5rem;
  line-height: 2.5rem;
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
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 41rem;
`;
