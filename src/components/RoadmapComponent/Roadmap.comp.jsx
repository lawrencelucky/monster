import React from 'react';

import {
  RoadmapContainer,
  RoadmapHeader,
  ContentContainer,
  DayTodoContainer,
  DayContainer,
  Day,
  TodoContainer,
  Todo,
} from './Roadmap.styles';

const Roadmap = () => {
  return (
    <RoadmapContainer>
      <RoadmapHeader>Roadmap</RoadmapHeader>

      <ContentContainer>
        <DayTodoContainer>
          <DayContainer>
            <Day>Q2 2021</Day>
          </DayContainer>
          <TodoContainer>
            <Todo>
              <span>$MNSTR</span>Token Launch
            </Todo>
            <Todo>
              <span>MONSTERPools</span> & <span>MONSTERFarms</span>
            </Todo>
            <Todo>Private Sale</Todo>
            <Todo>Pre Sales</Todo>
            <Todo>TechRate Audit</Todo>
            <Todo>Listing on PancakeSwap</Todo>
            <Todo>Listing on Coingecko</Todo>
          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer>
            <Day>Q3 2021</Day>
          </DayContainer>
          <TodoContainer>
            <Todo>
              <span>MonsterBet</span>: Daily Fantasy Sports betting introduced
            </Todo>
            <Todo>Listing on CoinMarketCap</Todo>
            <Todo>
              <span>MonsterPad</span>: participate in pre series of new tokens
            </Todo>
            <Todo>
              <span>MonsterSwap</span>
            </Todo>
          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer>
            <Day>Q4 2021</Day>
          </DayContainer>
          <TodoContainer>
            <Todo>
              <span>MNSTRx</span>
            </Todo>
            <Todo>Certik Audit</Todo>
            <Todo>UX/UI Redesign and Tech Overhaul</Todo>
            <Todo>Automated Airdrop Distribution System for BSC</Todo>
            <Todo>(BEP20) tokens</Todo>
          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer not>
            <Day>Q1 2022</Day>
          </DayContainer>
          <TodoContainer>
            <Todo>
              <span>MONSTERScout</span>
            </Todo>
            <Todo>
              Introductionof DeFi 2.0 modules into the <span>Monster</span>
            </Todo>
            <Todo>Ecosystem</Todo>
          </TodoContainer>
        </DayTodoContainer>
      </ContentContainer>
    </RoadmapContainer>
  );
};

export default Roadmap;
