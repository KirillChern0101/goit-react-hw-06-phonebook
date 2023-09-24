import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './reducer';

export const store = configureStore({
  reducer: contactSlice,
});
