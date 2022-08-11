import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { addCard, deleteCard, editCash } from './actions';

const cards = createReducer(
  [
    {
      amount: '88800',
      cardHolder: 'Andrew Drew',
      cardName: 'Mono',
      cardNumber: '4545454545454545',
      currency: 'UAH',
      cvv: '333',
      expiry: '2024-06',
    },
    {
      amount: '100',
      cardHolder: 'Cataline Frey',
      cardNumber: '3213214445558785',
      currency: 'USD',
      cvv: '123',
      expiry: '2023-01',
    },
  ],
  {
    [addCard]: (state, { payload }) => {
      return [payload, ...state];
    },
    [deleteCard]: (state, { payload }) => {
      return state.filter(cards => !cards.id.includes(payload));
    },
  }
);

const cash = createReducer(
  [
    {
      amount: '30000',
      currency: 'USD',
    },
  ],
  {
    [editCash]: (_, { payload }) => {
      return [payload];
    },
    // [addCash]: (state, { payload }) => {
    //   return [payload, ...state];
    // },
  }
);

export default combineReducers({
  cards,
  cash,
});
