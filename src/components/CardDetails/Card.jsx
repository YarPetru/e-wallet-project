import PropTypes from 'prop-types';

import visaLogo from 'pics/visa-logo.png';
import mastercardLogo from 'pics/mastercard-logo.png';
import s from './CardDetails.module.scss';

const Card = ({ bank, typeCard, cardNumber, cardHolder, expiry, network }) => {
  return (
    <>
      <div className={s.cardBlock}>
        <div className={s.cardHeader}>
          {bank && <p className={s.bankName}>{bank}</p>}
          {typeCard && <p className={s.typeCard}>{typeCard}</p>}
        </div>
        <p className={s.cardNumber}>{cardNumber}</p>
        <div className={s.cardFooter}>
          <div className={s.footerLeftBlock}>
            {cardHolder && <p className={s.cardHolder}>{cardHolder}</p>}
            {expiry && (
              <p className={s.expiry}>{expiry.split('-').join('/')}</p>
            )}
          </div>
          <div className={s.footerLeftBlock}>
            {network && network === 'visa' && (
              <img src={visaLogo} alt="payment system logo" width="50" />
            )}
            {network && network === 'mastercard' && (
              <img src={mastercardLogo} alt="payment system logo" width="50" />
            )}
            {network && network !== 'visa' && network !== 'mastercard' && (
              <p>{network}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  bank: PropTypes.string,
  typeCard: PropTypes.string,
  cardNumber: PropTypes.string.isRequired,
  cardHolder: PropTypes.string,
  expiry: PropTypes.string.isRequired,
  network: PropTypes.string,
};

export default Card;
