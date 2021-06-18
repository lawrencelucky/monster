import React from 'react';

import {
  AboutMonsterContainer,
  Header,
  Desc,
  CardContainer,
  Card,
  CardHeader,
  CardBody,
} from './AboutMonster.styles';

const AboutMonster = () => {
  return (
    <AboutMonsterContainer>
      <Header>
        About <span>MONSTER Finance</span>
      </Header>
      <Desc>
        At <span>MONSTER</span>, we seek to financially reward the most diehard
        fans in a ‘first of its kind’ decentralized finance platform and
        sporting community which distributes wealth to the diehard fans.
      </Desc>
      <Header>
        The <span>MONSTER</span> Ecosystem
      </Header>

      <CardContainer>
        <Card>
          <CardHeader>$MNSTR</CardHeader>
          <CardBody>Our native, deflationary token</CardBody>
        </Card>
        <Card>
          <CardHeader>$MNSTRx</CardHeader>
          <CardBody>Our governance token. Decide MONSTER’s future.</CardBody>
        </Card>
        <Card>
          <CardHeader>MONSTERPools & MONSTERFarms</CardHeader>
          <CardBody>Earn rewards for providing liquidity</CardBody>
        </Card>
      </CardContainer>

      <CardContainer>
        <Card>
          <CardHeader>MONSTERScout</CardHeader>
          <CardBody>
            Launchpad for investing in the next generation of stars via player
            tokenization
          </CardBody>
        </Card>
        <Card>
          <CardHeader>MONSTERBet</CardHeader>
          <CardBody>
            Daily Fantasy Sports betting for all major sporting leagues
          </CardBody>
        </Card>
      </CardContainer>
    </AboutMonsterContainer>
  );
};

export default AboutMonster;
