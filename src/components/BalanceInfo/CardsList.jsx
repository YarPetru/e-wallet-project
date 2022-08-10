import { nanoid } from 'nanoid';

import { useSelector } from 'react-redux/es/exports';

import s from './BalanceInfo.module.scss';

const CardsList = () => {
  const cards = useSelector(state => state.cards);
  return (
    <ul className={s.cardsList}>
      {cards.map(card => (
        <li key={nanoid()} className={s.cardItem}>
          <p className={s.cardInfo}>{`${card.amount} ${card.currency}`}</p>
          <button className={s.editButton} type="button">
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
