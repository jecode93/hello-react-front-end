import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import greetingReducer from './greeting/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
