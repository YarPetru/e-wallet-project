import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addCard = createAction(
  'cards/add_card',
  (amount, cardHolder, cardNumber, currency, cvv, expiry) => ({
    payload: {
      id: nanoid(),
      amount,
      cardHolder,
      cardNumber,
      currency,
      cvv,
      expiry,
    },
  })
);

export const deleteCard = createAction('cards/delete_card');

export const addCash = createAction('cash/add_cash', (amount, currency) => ({
  payload: {
    id: nanoid(),
    amount,
    currency,
  },
}));
