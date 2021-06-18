import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme, Container, fadeIn } from './../../globalStyles';

export const PreSalePageContainer = styled(Container)`
  animation: ${fadeIn} 0.3s ease-out;
`;

export const Header = styled.div`
  display: flex;
  padding: 5rem 0 0 15rem;

  @media screen and (max-width: 1200px) {
    padding-left: 10rem;
  }

  @media screen and (max-width: 1100px) {
    padding-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
  }
`;

export const LogoContainer = styled(Link)`
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

export const PreSaleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15rem;
  margin-top: 2rem;

  @media screen and (max-width: 1200px) {
    padding: 0 10rem;
  }

  @media screen and (max-width: 1100px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const JoinPreSaleContainer = styled.div`
  background: ${theme.primaryColor};
  padding: 2px 1.8rem;

  @media screen and (max-width: 700px) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 400px) {
    padding: 2px;
  }
`;

export const JoinPreSaleText = styled.p`
  font-weight: 500;
  font-size: 1.8rem;

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const Button = styled.button`
  background: transparent;
  color: ${theme.secondaryColor};
  border: 2px solid ${theme.secondaryColor};
  border-radius: 20px;
  padding: 2px 3rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.8rem;

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;

export const Card = styled.div`
  display: flex;
  padding: 1rem;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const CardLeft = styled.div`
  background: ${theme.secondaryBgColor};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 70rem;
  padding-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 5px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const CardLeftHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${theme.primaryColor};

  @media screen and (max-width: 600px) {
    margin: 2rem 1rem;
  }
`;

export const IconTokenContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CardIcon = styled.img`
  width: 2.9rem;
  margin-right: 1rem;
`;

export const CardToken = styled.p`
  font-weight: 600;
  font-size: 1.8rem;
`;

export const CardLeftButton = styled.button`
  border: 1px solid ${theme.primaryColor};
  font-size: 1.4rem;
  font-weight: 600;
  background: transparent;
  color: ${theme.primaryColor};
  padding: 2px 2rem;
  border-radius: 20px;
  box-shadow: 0 0px 2px 1px ${theme.primaryColor};
  cursor: pointer;
  text-shadow: ${theme.primaryColor} 0px 0px 5px;
`;

export const TrackTokenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeadingDescContainer = styled.div`
  @media screen and (max-width: 500px) {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

export const TrackHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const TrackDesc = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
`;

export const Progress = styled.div`
  width: 60rem;
  height: 8px;
  border-radius: 10px;
  background: ${theme.textColor};
  margin: 0 auto;
  margin-top: 4rem;

  @media screen and (max-width: 600px) {
    width: 95%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const TransactionTokenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 4rem;
  padding-top: 5rem;
  margin-top: 5rem;
  border-top: 1px solid ${theme.textColor};

  @media screen and (max-width: 600px) {
    margin: 0 1rem;
    margin-top: 5rem;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TransactionHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const TransactionDesc = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
`;

export const CardRight = styled.div`
  width: 45rem;
  background: linear-gradient(
    -215.68deg,
    rgba(3, 115, 93, 0.78) -11.46%,
    rgba(3, 115, 93, 0.78) -11.46%,
    rgba(3, 115, 93, 0.78) -2.59%,
    rgba(3, 115, 93, 0) 120.37%
  );
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 4rem 6rem;

  @media screen and (max-width: 1100px) {
    width: 70rem;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

export const CardRightHeading = styled.h2`
  font-size: 2.4rem;

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

export const CardRightDescription = styled.p`
  width: 35rem;
  font-size: 1.5rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const WhiteListContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: flex-end;
`;

export const WhiteListIcon = styled.img`
  margin-right: 5px;
`;

export const WhiteListText = styled.p`
  font-size: 1.2rem;
  text-decoration: underline;
`;

export const Text = styled.p`
  margin-top: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const CardRightButton = styled.button`
  font-weight: 500;
  padding: 1.5rem;
  border: 1px solid ${theme.textColor};
  background: transparent;
  border-radius: 5px;
  color: ${theme.textColor};
  font-size: 1.5rem;
  width: 100%;
  cursor: pointer;
`;

export const WarningContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
  padding-top: 2rem;
`;

export const WarningIcon = styled.img`
  margin-right: 1rem;
`;

export const WarningText = styled.p`
  font-size: 1.2rem;
`;
