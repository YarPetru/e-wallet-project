import { useState } from 'react';

import Modal from 'components/Modal';
import s from './EditCashContent.module.scss';

const EditCashContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={s.editCashSection}>
      <p className={s.content}>To actualize your cash click</p>
      <button type="button" className={s.modalOpenBtn} onClick={openModal}>
        HERE{' '}
      </button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </section>
  );
};

export default EditCashContent;
