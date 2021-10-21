import { useState } from 'react';
import { Modal } from './Modal';

export const useModal = (initialState: boolean = false) => {
  const [isOpen, setModalState] = useState<boolean>(initialState);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    Modal,
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};
