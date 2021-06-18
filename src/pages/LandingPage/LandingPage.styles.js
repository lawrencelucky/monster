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

export const RoadmapContainer = styled.div`
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RoadmapHeader = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 5rem;
`;

export const RoadmapImage = styled.img``;

export const AllocationContainer = styled.div`
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.secondaryBgColor};
`;

export const AllocationHeader = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 5rem;
`;

export const AllocationImage = styled.img``;

export const FlexWrapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  grid-gap: 1rem;
  width: 90%;

  @media screen and (max-width: 600px) {
    place-items: center;
  }
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
`;

export const FooterHeader = styled.h2`
  margin-bottom: 5rem;
  font-size: 2.4rem;
  font-weight: 600;
`;

export const BinanceLogo = styled.img``;
