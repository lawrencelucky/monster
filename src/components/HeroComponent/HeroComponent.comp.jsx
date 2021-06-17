import React from 'react';

import {
  HeroSectionContainer,
  ContentContainer,
  Heading,
  Description,
  Button,
  ImageContainer,
  Image,
} from './HeroComponent.styles';

import HeroImage from './../../assets/hero_image.png';

const HeroComponent = () => {
  return (
    <HeroSectionContainer>
      <ContentContainer>
        <Heading>Redifining Sports Fandom</Heading>
        <Description>
          Decentralised, Incentivized, Tokenized. <br /> Join the Whitelist
          Public Sale lottery + Airdrop
        </Description>
        <Button to='/pre-sale'>Join the MONSTER Pre-sale</Button>
      </ContentContainer>
      <ImageContainer>
        <Image src={HeroImage} alt='' draggable={false} />
      </ImageContainer>
    </HeroSectionContainer>
  );
};

export default HeroComponent;
