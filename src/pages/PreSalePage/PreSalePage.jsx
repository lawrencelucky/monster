import React from 'react';

import {
  PreSalePageContainer,
  Header,
  LogoContainer,
  LogoIcon,
  LogoImage,
  PreSaleHeader,
  JoinPreSaleContainer,
  JoinPreSaleText,
  Button,
  Card,
  CardLeft,
  CardLeftHeader,
  IconTokenContainer,
  CardIcon,
  CardToken,
  CardLeftButton,
  TrackTokenContainer,
  HeadingDescContainer,
  TrackHeading,
  TrackDesc,
  Progress,
  TransactionTokenContainer,
  TransactionHeading,
  TransactionDesc,
  CardRight,
  CardRightHeading,
  CardRightDescription,
  WhiteListContainer,
  WhiteListIcon,
  WhiteListText,
  Text,
  CardRightButton,
  WarningContainer,
  WarningIcon,
  WarningText,
} from './PreSalePage.styles';

import MonsterIcon from './../../assets/monster_logo.png';
import MonsterTitle from './../../assets/monster_title_logo.png';
import PaperIcon from './../../assets/paper_icon.svg';
import WarnIcon from './../../assets/warn_icon.svg';

const PreSalePage = () => {
  return (
    <PreSalePageContainer>
      <Header>
        <LogoContainer to='/'>
          <LogoIcon src={MonsterIcon} alt='' draggable={false} />
          <LogoImage src={MonsterTitle} alt='' draggable={false} />
        </LogoContainer>
      </Header>

      <PreSaleHeader>
        <JoinPreSaleContainer>
          <JoinPreSaleText>Join the MONSTERFinance Pre Sale</JoinPreSaleText>
        </JoinPreSaleContainer>
        <Button>Claim Airdrop</Button>
      </PreSaleHeader>

      <Card>
        <CardLeft>
          <CardLeftHeader>
            <IconTokenContainer>
              <CardIcon src={MonsterIcon} alt='' draggable={false} />
              <CardToken>$MNSTR</CardToken>
            </IconTokenContainer>
            <CardLeftButton>Open</CardLeftButton>
          </CardLeftHeader>
          <TrackTokenContainer>
            <HeadingDescContainer>
              <TrackHeading>300,000 MNSTR</TrackHeading>
              <TrackDesc>Total raise</TrackDesc>
            </HeadingDescContainer>
            <HeadingDescContainer>
              <TrackHeading>0.05 BUSD</TrackHeading>
              <TrackDesc>Per MNSTR</TrackDesc>
            </HeadingDescContainer>
            <HeadingDescContainer>
              <TrackHeading>20 : 15 : 15 : 15</TrackHeading>
              <TrackDesc>Closes in</TrackDesc>
            </HeadingDescContainer>
          </TrackTokenContainer>
          <Progress />
          <TransactionTokenContainer>
            <HeadingDescContainer>
              <TransactionHeading>0 BUSD</TransactionHeading>
              <TransactionDesc>Your deposit</TransactionDesc>
            </HeadingDescContainer>
            <HeadingDescContainer>
              <TransactionHeading>0 MNSTR</TransactionHeading>
              <TransactionDesc>Your allocation</TransactionDesc>
            </HeadingDescContainer>
            <HeadingDescContainer>
              <TransactionHeading>400 BUSD</TransactionHeading>
              <TransactionDesc>Max allocation</TransactionDesc>
            </HeadingDescContainer>
          </TransactionTokenContainer>
        </CardLeft>
        <CardRight>
          <CardRightHeading>About MONSTER</CardRightHeading>
          <CardRightDescription>
            At MONSTER, we seek to financially reward the most diehard fans in a
            ‘first of its kind’ decentralized finance platform and sporting
            community which distributes wealth to the diehard fans.
          </CardRightDescription>
          <WhiteListContainer>
            <WhiteListIcon src={PaperIcon} alt='' draggable={false} />
            <WhiteListText>Whitepaper</WhiteListText>
          </WhiteListContainer>
          <Text>Join Pool</Text>
          <CardRightButton>Connect Wallet</CardRightButton>
          <WarningContainer>
            <WarningIcon src={WarnIcon} alt='' draggable={false} />
            <WarningText>
              BUSD can’t be withdrawn after joining. Tokens can be claimed after
              [Insert Date Time]
            </WarningText>
          </WarningContainer>
        </CardRight>
      </Card>
    </PreSalePageContainer>
  );
};

export default PreSalePage;
