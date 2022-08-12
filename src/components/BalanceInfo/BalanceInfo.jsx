import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

import Modal from 'components/Modal';
import CardsList from './CardsList';
import Title from 'components/Title';
import s from './BalanceInfo.module.scss';

const BalanceInfo = () => {
  const [cash] = useSelector(state => state.wallet.cash);
  const cards = useSelector(state => state.wallet.cards);

  const totalMoney = [...cards, cash];

  const usdCards = totalMoney.filter(item => item.currency === 'USD');
  const totalUsd = usdCards.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  const uahCards = totalMoney.filter(item => item.currency === 'UAH');
  const totalUah = uahCards.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  const eurCards = totalMoney.filter(item => item.currency === 'EUR');
  const totalEur = eurCards.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={s.section}>
      <Title title="Total Balance" />
      <div className={s.totalWrapper}>
        {totalUsd !== 0 && (
          <p className={s.totalAmountUsd}>{`${totalUsd} USD`}</p>
        )}
        {totalEur !== 0 && (
          <p className={s.totalAmountEur}>{`${totalEur} EUR`}</p>
        )}
        {totalUah !== 0 && (
          <p className={s.totalAmountUah}>{`${totalUah} UAH`}</p>
        )}
      </div>
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
