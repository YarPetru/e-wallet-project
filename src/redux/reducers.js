import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { addCard, deleteCard, editCash } from './actions';

const cards = createReducer(
  [
    {
      id: nanoid(),
      amount: '88800',
      cardHolder: 'Andrew Drew',
      cardNumber: '4002690000000008',
      currency: 'UAH',
      cvv: '737',
      expiry: '2030-03',
    },
    {
      id: nanoid(),
      amount: '1000',
      cardHolder: 'Cataline Frey',
      cardNumber: '5100060000000002',
      currency: 'USD',
      cvv: '737',
      expiry: '2029-12',
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
