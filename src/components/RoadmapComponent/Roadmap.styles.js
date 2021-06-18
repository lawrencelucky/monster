import styled from 'styled-components';

import { theme } from './../../globalStyles';

export const RoadmapContainer = styled.div`
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    padding: 4rem 1rem;
  }
`;

export const RoadmapHeader = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 5rem;

  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const ContentContainer = styled.div``;

export const DayTodoContainer = styled.div`
  display: flex;
`;

export const DayContainer = styled.div`
  padding-right: 3rem;
  border-right: ${({ not }) => (not ? '' : `1px solid ${theme.textColor}`)};

  @media screen and (max-width: 500px) {
    padding-right: 2rem;
  }
`;

export const Day = styled.p`
  position: relative;
  font-size: 1.8rem;

  &::after {
    content: '';
    position: absolute;
    right: -55%;
    height: 2rem;
    width: 2rem;
    border-radius: 999px;
    background: ${theme.textColor};

    @media screen and (max-width: 650px) {
      right: -60%;
    }

    @media screen and (max-width: 580px) {
      right: -67%;
    }

    @media screen and (max-width: 500px) {
      right: -52%;
    }
  }

  @media screen and (max-width: 650px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 580px) {
    font-size: 1.4rem;
  }
`;

export const TodoContainer = styled.div`
  padding-left: 3rem;
  padding-bottom: 4rem;

  @media screen and (max-width: 500px) {
    padding-left: 2rem;
  }

  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;

export const Todo = styled.p`
  font-size: 1.8rem;
  line-height: 2.5rem;

  span {
    color: ${theme.primaryColor};
  }

  @media screen and (max-width: 650px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 580px) {
    font-size: 1.4rem;
  }
`;
