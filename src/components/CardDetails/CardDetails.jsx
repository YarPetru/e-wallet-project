import { useSelector } from 'react-redux/es/exports';
import Title from 'components/Title';
import Card from './Card';
import s from './CardDetails.module.scss';

const CardDetails = () => {
  const cards = useSelector(state => state.cards);
  console.log(cards);

  const onDeleteCard = cardId => {
    console.log(`хочу удалить карту с id ${cardId}`);
  };

  return (
    <>
      <Title title="Details" />
      <div className={s.detailsWrapper}>
        <div className={s.btnWrapper}>
          <button className={s.controlBtn}>Add Card</button>
          <button className={s.controlBtn}>Edit Cash</button>
        </div>

        <ul className={s.cardsList}>
          {cards &&
            cards.map(card => (
              <li key={card.id} className={s.cardItem}>
                <Card
                  bank="Bank"
                  typeCard="debit"
                  cardNumber={card.cardNumber}
                  cardHolder={card.cardHolder}
                  expiry={card.expiry}
                  network="mastercard"
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
    </>
  );
};

export default CardDetails;
