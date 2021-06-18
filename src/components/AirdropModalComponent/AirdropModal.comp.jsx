import React from 'react';

import {
  OverlayBackground,
  Modal,
  Header,
  Desc,
  Input,
  Button,
} from './AirdropModal.styles';

const AirdropModal = ({ openModal, setOpenModal }) => {
  return (
    <>
      <OverlayBackground open={openModal} onClick={() => setOpenModal(false)} />
      <Modal open={openModal}>
        <Header>
          Claim your <span>MNSTR</span> Airdrop Tokens
        </Header>
        <Desc>Provide the BSC Address you entered in the Airdrop form</Desc>
        <Input placeholder='Enter BSC Address (Same as Airdrop form)' />
        <Button>Submit Address</Button>
      </Modal>
    </>
  );
};

export default AirdropModal;
