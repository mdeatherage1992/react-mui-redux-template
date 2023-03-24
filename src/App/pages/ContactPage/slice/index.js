import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { contactPageSaga } from './saga';

export const initialState = {
  loading: true,
  email: '',
  message: '',
};

const slice = createSlice({
  name: 'contactPage',
  initialState,
  reducers: {
    submitForm(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.email = '';
      state.message = '';
    },
    fetchFail(state, action) {
      state.email = '';
      state.message = '';
      state.loading = false;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { actions: contactPageActions } = slice;

export const useContactPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: contactPageSaga });
  return { actions: slice.actions };
};
