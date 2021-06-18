import React from 'react';

import {
  OverlayBackground,
  Modal,
  Header,
  Desc,
  BuyWithContainer,
  IconTextContainer,
  BUSDIcon,
  BuyWithText,
  InputContainer,
  InputLabel,
  Input,
  ReceiveContainer,
  MNSTRIcon,
  ReceiveText,
  ReceiveAmountContainer,
  ReceievedAmount,
  Button,
  PurchaseWarning,
  TransactionDetailContainer,
  TransactionDetail,
  TransactionDetailDesc,
  TransactionDetailValue,
  TransactionDate,
} from './TransactionModal.styles';

import MonsterIcon from './../../assets/monster_logo.png';
import BinanceIcon from './../../assets/token_logo.svg';

const TransactionModal = ({ openModal, setOpenModal }) => {
  return (
    <>
      <OverlayBackground open={openModal} onClick={() => setOpenModal(false)} />
      <Modal open={openModal}>
        <Header>Monster Finance Public Sale</Header>
        <Desc>
          Buy your Monster <span>(MNSTR)</span> tokens with{' '}
          <span>Binance USD (BUSD).</span> <br /> You can participate with a
          minimum of <span>400 BUSD</span>
        </Desc>

        <BuyWithContainer>
          <IconTextContainer>
            <BUSDIcon src={BinanceIcon} alt='' draggable={false} />
            <BuyWithText>
              Buy with: <br /> <span>BUSD</span>
            </BuyWithText>
          </IconTextContainer>
          <InputContainer>
            <InputLabel>MAX</InputLabel>
            <Input value='0.0000' />
          </InputContainer>
        </BuyWithContainer>

        <ReceiveContainer>
          <IconTextContainer>
            <MNSTRIcon src={MonsterIcon} alt='' draggable={false} />
            <ReceiveText>
              Receive: <br /> <span>MNSTR</span>
            </ReceiveText>
          </IconTextContainer>
          <ReceiveAmountContainer>
            <ReceievedAmount>0.0000</ReceievedAmount>
          </ReceiveAmountContainer>
        </ReceiveContainer>

        <Button>
          Buy <span>MNSTR</span>
        </Button>

        <PurchaseWarning>
          BUSD amount too small. Minimum purchase is XXX <span>MNSTR</span>
        </PurchaseWarning>

        <TransactionDetailContainer>
          <TransactionDetail>
            <TransactionDetailDesc>
              Your total contibution:
            </TransactionDetailDesc>
            <TransactionDetailValue>0.00 BUSD</TransactionDetailValue>
          </TransactionDetail>

          <TransactionDetail>
            <TransactionDetailDesc>
              Your total MNSTR purchased:
            </TransactionDetailDesc>
            <TransactionDetailValue>0.00 MNSTR</TransactionDetailValue>
          </TransactionDetail>
        </TransactionDetailContainer>

        <TransactionDate>
          Tokens will be distributed on [insert DateTime]
        </TransactionDate>
      </Modal>
    </>
  );
};

export default TransactionModal;
