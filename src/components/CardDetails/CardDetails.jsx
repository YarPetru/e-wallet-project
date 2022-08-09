import Title from 'components/Title';
import Card from './Card';
import s from './CardDetails.module.scss';

const CardDetails = () => {
  return (
    <>
      <Title title="Details" />
      <div className={s.btnWrapper}>
        <button className={s.controlBtn}>Add Card</button>
        <button className={s.controlBtn}>Edit Cash</button>
      </div>

      <ul className={s.cardsList}>
        <li className={s.card}>
          <Card />
        </li>
      </ul>
    </>
  );
};

export default CardDetails;
