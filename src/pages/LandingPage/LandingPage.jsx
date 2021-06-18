import React from 'react';

import {
  LandingPageContainer,
  Header,
  LogoContainer,
  LogoIcon,
  LogoImage,
  Navbar,
  NavUl,
  NavListItem,
  RoadmapContainer,
  RoadmapHeader,
  RoadmapImage,
  AllocationContainer,
  AllocationHeader,
  AllocationImage,
  FlexWrapContainer,
  AllocatedContainer,
  AllocatedPill,
  Allocated,
  AllocatedPercentage,
  Footer,
  FooterHeader,
  BinanceLogo,
} from './LandingPage.styles';

import HeroComponent from '../../components/HeroComponent/HeroComponent.comp';
import AboutMonster from './../../components/AboutMonsterComponent/AboutMonster.comp';

import MonsterIcon from './../../assets/monster_logo.png';
import MonsterTitle from './../../assets/monster_title_logo.png';
import Roadmap from './../../assets/monster_roadmap.png';
import Allocation from './../../assets/token_allocation_image.png';
import Binance from './../../assets/binance_logo.png';

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Header>
        <LogoContainer>
          <LogoIcon src={MonsterIcon} alt='' draggable={false} />
          <LogoImage src={MonsterTitle} alt='' draggable={false} />
        </LogoContainer>
        <Navbar>
          <NavUl>
            <NavListItem>About</NavListItem>
            <NavListItem>MONSTER Ecosystem</NavListItem>
            <NavListItem>Roadmap</NavListItem>
            <NavListItem>Token Allocation</NavListItem>
            <NavListItem active>Playbook</NavListItem>
          </NavUl>
        </Navbar>
      </Header>

      <HeroComponent />
      <AboutMonster />

      <RoadmapContainer>
        <RoadmapHeader>Roadmap</RoadmapHeader>
        <RoadmapImage src={Roadmap} alt='' draggable={false} />
      </RoadmapContainer>

      <AllocationContainer>
        <AllocationHeader>Token Allocation</AllocationHeader>
        <AllocationImage src={Allocation} alt='' draggable={false} />

        <FlexWrapContainer>
          <AllocatedContainer>
            <AllocatedPill seed />
            <Allocated>Seed Round</Allocated>
            <AllocatedPercentage>8.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill priv />
            <Allocated>Private Sale</Allocated>
            <AllocatedPercentage>10.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill pub />
            <Allocated>Public Sale</Allocated>
            <AllocatedPercentage>1.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill dex />
            <Allocated>DEX/TGE</Allocated>
            <AllocatedPercentage>2.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill team />
            <Allocated>Team</Allocated>
            <AllocatedPercentage>15.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill airdrop />
            <Allocated>Airdrop</Allocated>
            <AllocatedPercentage>1.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill eco />
            <Allocated>Ecosystem/Incentives</Allocated>
            <AllocatedPercentage>11.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill liquidity />
            <Allocated>Liquidity Pool Reward</Allocated>
            <AllocatedPercentage>15.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill reserves />
            <Allocated>Reserves</Allocated>
            <AllocatedPercentage>15.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill marketing />
            <Allocated>Marketing</Allocated>
            <AllocatedPercentage>22.0%</AllocatedPercentage>
          </AllocatedContainer>
        </FlexWrapContainer>
      </AllocationContainer>

      <Footer>
        <FooterHeader>Powered By:</FooterHeader>
        <BinanceLogo src={Binance} alt='' draggable={false} />
      </Footer>
    </LandingPageContainer>
  );
};

export default LandingPage;
