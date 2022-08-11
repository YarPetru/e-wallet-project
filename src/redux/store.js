import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cardInfoApi } from './cardInfo/cardInfoSlice';

import wallet from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, wallet);

export const store = configureStore({
  reducer: {
    [cardInfoApi.reducerPath]: cardInfoApi.reducer,
    wallet: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    cardInfoApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
