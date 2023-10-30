import React from 'react';
import { ButtonCansel, ButtonLogout, Close, ModalContainer, ModalContent, ModalOverlay, ModalTitle } from './ModalLogOutStyled';


const LogoutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <Close onClick={onClose} style={{ cursor: 'pointer' }} />
        <ModalTitle>Log out</ModalTitle>
        <ModalContent>
          Are you sure you want to log out of your account?
        </ModalContent>
        <ButtonLogout onClick={onClose}>
          Log out
        </ButtonLogout>
        <ButtonCansel onClick={onClose}>Cancel</ButtonCansel>
      </ModalContainer>
    </ModalOverlay>
  );
};
export default LogoutModal;