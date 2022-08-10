import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Title from 'components/Title';
import s from './Modal.module.scss';

const Modal = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    e.code === 'Escape' && onClose();
  };

  const handleOverlayClick = e => {
    e.currentTarget === e.target && onClose();
  };

  return (
    <div className={s.overlay} onClick={handleOverlayClick}>
      <div className={s.modal}>
        <Title title="Edit your cash" />
        <h2 className={s.modalHeader}>НАзвание</h2>
        <p className={s.modalInfo}> ТУТ АКТУАЛИЗИРУЕМ КЕШ</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
