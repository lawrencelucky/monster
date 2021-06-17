import styled from 'styled-components';

import { Container, theme, fadeIn } from './../../globalStyles';

export const LandingPageContainer = styled(Container)`
  animation: ${fadeIn} 0.3s ease-out;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 2rem 0rem 15rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.img`
  margin-right: 1.3rem;
  width: 5rem;
  height: 6rem;
  object-fit: contain;
`;

export const LogoImage = styled.img`
  width: 15rem;
`;

export const Navbar = styled.nav``;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavListItem = styled.li`
  font-size: 1.8rem;
  font-weight: 400;
  list-style: none;
  color: ${({ active }) => (active ? theme.primaryColor : '')};
  text-decoration: ${({ active }) => (active ? 'underline' : '')};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 6rem;
  }
`;
