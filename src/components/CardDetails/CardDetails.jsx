import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

import * as reduxActions from 'redux/actions';
import Modal from 'components/Modal';
import Title from 'components/Title';
import Card from './Card';
import s from './CardDetails.module.scss';

const CardDetails = () => {
  const cards = useSelector(state => state.wallet.cards);

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onDeleteCard = cardId => {
    dispatch(reduxActions.deleteCard(cardId));
  };

  return (
    <>
      <Title title="Details" />
      <div className={s.detailsWrapper}>
        <div className={s.buttonsWrapper}>
          <Link className={s.controlLink} to="/add-card">
            <button type="button" className={s.controlBtn}>
              Add Card
            </button>
          </Link>
          <Link className={s.controlLink} to="/edit-cash" onClick={openModal}>
            <button type="button" className={s.controlBtn}>
              Edit Cash
            </button>
          </Link>
        </div>

        <ul className={s.cardsList}>
          {cards &&
            cards.map(card => (
              <li key={card.id} className={s.cardItem}>
                <Card
                  cardNumber={card.cardNumber}
                  cardHolder={card.cardHolder}
                  expiry={card.expiry}
                />
                <button
                  className={s.deleteCardBtn}
                  type="button"
                  onClick={() => onDeleteCard(card.id)}
                >
                  Remove
                </button>
              </li>
            ))}
        </ul>
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default CardDetails;
