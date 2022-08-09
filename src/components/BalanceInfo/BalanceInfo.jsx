import Title from 'components/Title';
import s from './BalanceInfo.module.scss';

const BalanceInfo = () => {
  return (
    <>
      <Title title="Total Balance" />
      <h4 className={s.title}>Cash</h4>
      <h4 className={s.title}>My Cards</h4>
    </>
  );
};

export default BalanceInfo;
