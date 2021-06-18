import styled from 'styled-components';

import { theme, fadeIn } from './../../globalStyles';

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
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    padding: 0 2rem;
  }
`;

export const Header = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 4.5rem;
  margin-top: 3rem;
  text-align: center;

  span {
    color: ${theme.primaryColor};
  }

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const Desc = styled.p`
  margin-bottom: 3.5rem;
  font-size: 1.6rem;
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 2.5rem;
  border: 1px solid ${theme.textColor};
  text-align: center;
  background: transparent;
  padding: 1rem;
  border-radius: 5px;
  color: ${theme.textColor};
  font-size: 1.6rem;

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: ${theme.primaryColor};
  color: ${theme.textColor};
  border: none;
  padding: 1.2rem;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
  }
`;
