import styled from 'styled-components';

import { theme, fadeIn } from '../../globalStyles';

export const OverlayBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ open }) => (open ? 'flex' : 'none')};
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${theme.primaryColor};
  width: 65rem;
  min-height: 32.6rem;
  background: ${theme.backgroundColor};
  animation: ${fadeIn} 0.25s ease-out;
  z-index: 99;
  border-radius: 5px;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  padding: 0 6rem;

  @media screen and (max-width: 700px) {
    width: 85%;
  }

  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }
`;

export const Header = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 4.5rem;
  margin-top: 3rem;
  text-align: center;

  @media screen and (max-width: 700px) {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const Desc = styled.p`
  margin-bottom: 3.5rem;
  font-size: 1.6rem;
  text-align: center;

  span {
    color: ${theme.primaryColor};
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const TransactionContainer = styled.div``;

export const BuyWithContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.textColor};
  border-radius: 5px;
  padding: 1rem 2rem;
  margin-bottom: 3rem;
  width: 100%;

  @media screen and (max-width: 700px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const BUSDIcon = styled.img`
  width: 6rem;
  margin-right: 1rem;

  @media screen and (max-width: 700px) {
    width: 3rem;
  }
`;

export const BuyWithText = styled.p`
  color: ${theme.backgroundColor};

  span {
    color: ${theme.primaryColor};
    font-weight: 600;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid ${theme.primaryColor};
  border-radius: 5px;
  padding: 1rem 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    padding: 0.5rem;
  }
`;

export const InputLabel = styled.label`
  color: ${theme.primaryColor};
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Input = styled.input`
  border: none;
  text-align: right;
  font-size: 1.8rem;
  color: ${theme.primaryColor};
  font-weight: 600;
  width: 100%;
`;

export const ReceiveContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.textColor};
  border-radius: 5px;
  padding: 1rem 2rem;
  width: 100%;

  @media screen and (max-width: 700px) {
    padding: 1rem;
  }
`;

export const MNSTRIcon = styled.img`
  width: 6rem;
  margin-right: 1rem;

  @media screen and (max-width: 700px) {
    width: 3rem;
  }
`;

export const ReceiveText = styled.p`
  color: ${theme.backgroundColor};

  span {
    color: ${theme.primaryColor};
    font-weight: 600;
  }
`;

export const ReceiveAmountContainer = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
`;

export const ReceievedAmount = styled.p`
  font-size: 1.8rem;
  color: ${theme.backgroundColor};
  font-weight: 600;
  text-align: right;
`;

export const Button = styled.button`
  border: 0;
  background: ${theme.primaryColor};
  color: ${theme.textColor};
  font-size: 1.8rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 5px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;

  span {
    font-weight: 600;
  }

  @media screen and (max-width: 700px) {
    margin-top: 1rem;
  }
`;

export const PurchaseWarning = styled.p`
  font-size: 1.4rem;
  color: ${theme.secondaryColor};
  text-align: center;

  span {
    color: ${theme.primaryColor};
  }
`;

export const TransactionDetailContainer = styled.div`
  background: ${theme.secondaryBgColor};
  padding: 2rem;
  border-radius: 5px;
  margin-top: 2rem;
  width: 100%;

  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`;

export const TransactionDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TransactionDetailDesc = styled.p``;

export const TransactionDetailValue = styled.p`
  font-weight: 500;
`;

export const TransactionDate = styled.p`
  text-align: center;
  margin-top: 1rem;
  padding-bottom: 3rem;
  font-size: 1.4rem;
`;
