import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useGetCardInfoQuery } from 'redux/cardInfo/cardInfoSlice';
import visaLogo from 'pics/visa-logo.png';
import mastercardLogo from 'pics/mastercard-logo.png';
import s from './CardDetails.module.scss';

const Card = ({ cardNumber, cardHolder, expiry }) => {
  const [tooltip, showTooltip] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  isCopied && toast.success('Card number is successfully copied');

  const {
    data: additionalCardData,
    isSuccess,
    error,
  } = useGetCardInfoQuery(cardNumber);

  error &&
    toast.error(
      `Error ${JSON.stringify(
        error.status
      )}, additional card data is not available`
    );

  return (
    isSuccess &&
    !error && (
      <>
        <div className={s.cardBlock}>
          <div className={s.cardHeader}>
            {additionalCardData.bank && (
              <p className={s.bankName}>{additionalCardData.bank.name}</p>
            )}
            {additionalCardData.type && (
              <p className={s.typeCard}>{additionalCardData.type}</p>
            )}
          </div>
          <CopyToClipboard text={cardNumber} onCopy={() => setIsCopied(true)}>
            <p
              data-tip="click to copy card number"
              onMouseEnter={() => showTooltip(true)}
              onMouseLeave={() => {
                showTooltip(false);
                setTimeout(() => showTooltip(true), 50);
              }}
              className={s.cardNumber}
            >
              {cardNumber}
            </p>
          </CopyToClipboard>
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
        {tooltip && <ReactTooltip type="light" />}
      </>
    )
  );
};

Card.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  cardHolder: PropTypes.string,
  expiry: PropTypes.string.isRequired,
};

export default Card;
