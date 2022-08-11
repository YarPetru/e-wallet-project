import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

import Modal from 'components/Modal';
import CardsList from './CardsList';
import Title from 'components/Title';
import s from './BalanceInfo.module.scss';

const BalanceInfo = () => {
  const [cash] = useSelector(state => state.wallet.cash);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const dispatch = useDispatch();

  return (
    <section className={s.section}>
      <Title title="Total Balance" />

      <h4 className={s.typeName}>Cash</h4>
      <div className={s.cashWrapper}>
        {cash && (
          <p className={s.cashInfo}>{`${cash.amount} ${cash.currency}`}</p>
        )}
        <Link to="/edit-cash">
          <button type="button" className={s.editButton} onClick={openModal}>
            Edit
          </button>
        </Link>
      </div>
      <h4 className={s.typeName}>My Cards</h4>
      <CardsList />
      {isModalOpen && <Modal onClose={closeModal} />}
    </section>
  );
};

export default BalanceInfo;
