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

  @media screen and (max-width: 1200px) {
    padding-left: 10rem;
  }

  @media screen and (max-width: 900px) {
    padding-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
  }
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

export const Navbar = styled.nav`
  @media screen and (max-width: 1200px) {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    right: ${({ open }) => (open ? 0 : '-100%')};
    background: ${theme.backgroundColor};
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease-out;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

    @media screen and (max-width: 1200px) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 1200px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const MenuContainer = styled.div``;

export const MenuImage = styled.img`
  display: none;

  @media screen and (max-width: 1200px) {
    display: flex;
    width: 4rem;
  }

  @media screen and (max-width: 500px) {
    width: 2.5rem;
  }
`;

export const CloseImage = styled.img`
  display: none;

  @media screen and (max-width: 1200px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    width: 4rem;
    position: fixed;
    top: 6rem;
    right: 2rem;
    z-index: 9999;
  }

  @media screen and (max-width: 768px) {
    top: 3rem;
  }

  @media screen and (max-width: 500px) {
    width: 2.5rem;
  }
`;

export const AllocationContainer = styled.div`
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.secondaryBgColor};

  @media screen and (max-width: 600px) {
    padding: 4rem 0;
  }
`;

export const AllocationHeader = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 5rem;

  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const AllocationImage = styled.img`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FlexWrapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  grid-gap: 1rem;
  width: 90%;
`;

export const AllocatedContainer = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const AllocatedPill = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 3px;
  background: ${({
    seed,
    priv,
    pub,
    dex,
    team,
    airdrop,
    eco,
    liquidity,
    reserves,
    marketing,
  }) =>
    seed
      ? '#CBCBCB'
      : priv
      ? '#EFEFEF'
      : pub
      ? '#FF6C26'
      : dex
      ? '#FD8719'
      : team
      ? '#FFA425'
      : airdrop
      ? '#FEC635'
      : eco
      ? '#8B635C'
      : liquidity
      ? '#60594D'
      : reserves
      ? '#9BC4CB'
      : marketing
      ? '#CFEBDF'
      : ''};
  margin-right: 0.5rem;
`;

export const Allocated = styled.p`
  margin-right: 1rem;
  font-size: 1.4rem;
`;

export const AllocatedPercentage = styled.p``;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0;

  @media screen and (max-width: 600px) {
    padding: 4rem 0;
  }
`;

export const FooterHeader = styled.h2`
  margin-bottom: 5rem;
  font-size: 2.4rem;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const BinanceLogo = styled.img``;
