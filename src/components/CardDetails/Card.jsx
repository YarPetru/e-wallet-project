import PropTypes from 'prop-types';

import { useGetCardInfoQuery } from 'redux/cardInfo/cardInfoSlice';
import visaLogo from 'pics/visa-logo.png';
import mastercardLogo from 'pics/mastercard-logo.png';
import s from './CardDetails.module.scss';

const Card = ({ cardNumber, cardHolder, expiry }) => {
  const {
    data: additionalCardData,
    // isSuccess,
    // error,
  } = useGetCardInfoQuery(cardNumber);

  console.log(additionalCardData);

  return (
    additionalCardData && (
      <div className={s.cardBlock}>
        <div className={s.cardHeader}>
          {additionalCardData.bank && (
            <p className={s.bankName}>{additionalCardData.bank.name}</p>
          )}
          {additionalCardData.type && (
            <p className={s.typeCard}>{additionalCardData.type}</p>
          )}
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
            {additionalCardData.scheme &&
              additionalCardData.scheme === 'visa' && (
                <img src={visaLogo} alt="payment system logo" width="50" />
              )}
            {additionalCardData.scheme &&
              additionalCardData.scheme === 'mastercard' && (
                <img
                  src={mastercardLogo}
                  alt="payment system logo"
                  width="50"
                />
              )}
            {additionalCardData.scheme &&
              additionalCardData.scheme !== 'visa' &&
              additionalCardData.scheme !== 'mastercard' && (
                <p>{additionalCardData.scheme}</p>
              )}
          </div>
        </div>
      </div>
    )
  );
};

Card.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  cardHolder: PropTypes.string,
  expiry: PropTypes.string.isRequired,
};

export default Card;

/* <div className={s.cardBlock}>
  <div className={s.cardHeader}>
    {additionalCardData.bank && (
      <p className={s.bankName}>{additionalCardData.bank}</p>
    )}
    {additionalCardData.type && (
      <p className={s.typeCard}>{additionalCardData.type}</p>
    )}
  </div>
  <p className={s.cardNumber}>{cardNumber}</p>
  <div className={s.cardFooter}>
    <div className={s.footerLeftBlock}>
      {cardHolder && <p className={s.cardHolder}>{cardHolder}</p>}
      {expiry && <p className={s.expiry}>{expiry.split('-').join('/')}</p>}
    </div>
    <div className={s.footerLeftBlock}>
      {additionalCardData.scheme &&
        additionalCardData.scheme === 'visa' && (
          <img src={visaLogo} alt="payment system logo" width="50" />
        )}
      {additionalCardData.scheme &&
        additionalCardData.scheme === 'mastercard' && (
          <img src={mastercardLogo} alt="payment system logo" width="50" />
        )}
      {additionalCardData.scheme &&
        additionalCardData.scheme !== 'visa' &&
        additionalCardData.scheme !== 'mastercard' && (
          <p>{additionalCardData.scheme}</p>
        )}
    </div>
  </div>
</div> */
