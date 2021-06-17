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
} from './LandingPage.styles';

import HeroComponent from '../../components/HeroComponent/HeroComponent.comp';

import MonsterIcon from './../../assets/monster_logo.png';
import MonsterTitle from './../../assets/monster_title_logo.png';

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
    </LandingPageContainer>
  );
};

export default LandingPage;
